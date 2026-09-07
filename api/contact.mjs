/* Contact endpoint.
 *
 * The browser never sees where the message goes. The Discord webhook lives
 * in the DISCORD_WEBHOOK_URL environment variable on Vercel and is read
 * only here, on the server, which is the whole reason this function exists
 * rather than the form posting to Discord directly.
 *
 * Required environment variable (Vercel > Project > Settings > Environment
 * Variables), for Production and Preview:
 *
 *   DISCORD_WEBHOOK_URL = https://discord.com/api/webhooks/...
 */

const LIMIT = 5 // submissions
const WINDOW = 10 * 60 * 1000 // per 10 minutes, per IP

// Serverless instances are short lived, so this stops bursts rather than a
// determined attacker. The honeypot and the timing check do the real work.
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const seen = (hits.get(ip) || []).filter((t) => now - t < WINDOW)
  seen.push(now)
  hits.set(ip, seen)
  if (hits.size > 5000) hits.clear()
  return seen.length > LIMIT
}

const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const hook = process.env.DISCORD_WEBHOOK_URL
  if (!hook) {
    console.error('DISCORD_WEBHOOK_URL is not set')
    return res.status(500).json({ error: 'Contact is not configured yet. Please use Discord.' })
  }

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages. Try again shortly.' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { return res.status(400).json({ error: 'Bad request' }) }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Bad request' })

  // Spam gate 1: a field no human can see. Anything in it is a bot.
  if (str(body.website, 200)) return res.status(200).json({ ok: true })

  // Spam gate 2: nobody reads the form and writes a brief in under three
  // seconds. Bots submit instantly.
  const elapsed = Number(body.elapsed)
  if (!Number.isFinite(elapsed) || elapsed < 3000) {
    return res.status(200).json({ ok: true })
  }

  const name = str(body.name, 80)
  const contact = str(body.contact, 120)
  const game = str(body.game, 200)
  const message = str(body.message, 4000)

  // The same rules the client enforces, applied again where they count.
  const errors = {}
  if (name.length < 2) errors.name = 'Please give me a name to call you by.'
  if (contact.length < 3) errors.contact = 'I need a Discord tag or email to reply to.'
  else if (contact.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact))
    errors.contact = 'That email does not look right.'
  if (message.length < 20) errors.message = 'Tell me a little more, at least 20 characters.'
  if (/https?:\/\/\S+.*https?:\/\/\S+.*https?:\/\/\S+/i.test(message))
    errors.message = 'Too many links.'

  if (Object.keys(errors).length) return res.status(422).json({ errors })

  const content = [
    '**New commission enquiry**',
    '**From:** ' + name,
    '**Reply to:** ' + contact,
    game ? '**Game / scope:** ' + game : null,
    '',
    message,
  ].filter(Boolean).join('\n')

  try {
    const r = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: content.slice(0, 1900),
        // Never let a submitted name ping anyone.
        allowed_mentions: { parse: [] },
      }),
    })
    if (!r.ok) throw new Error('webhook ' + r.status)
  } catch (e) {
    console.error('webhook failed', e)
    return res.status(502).json({ error: 'Could not send that. Please reach me on Discord.' })
  }

  return res.status(200).json({ ok: true })
}
