/* Exercises api/contact.js without deploying it.
 *
 * The webhook is stubbed, so nothing is sent anywhere. What this checks is
 * the part that matters: that the spam gates and the validation behave the
 * way the form promises they do.
 *
 * Run with: node scripts/test-contact.mjs
 */
process.env.DISCORD_WEBHOOK_URL = 'https://example.invalid/hook'

let sent = []
globalThis.fetch = async (url, init) => {
  sent.push(JSON.parse(init.body))
  return { ok: true, status: 204 }
}

const { default: handler } = await import('../api/contact.mjs')

const good = {
  name: 'Ada',
  contact: 'ada@example.com',
  game: 'Tycoon, 40 plots',
  message: 'I need a stud tycoon map with about forty plots in your style.',
  website: '',
  elapsed: 30000,
}

function run(body, { method = 'POST', ip = '1.2.3.4' } = {}) {
  return new Promise((resolve) => {
    const req = { method, headers: { 'x-forwarded-for': ip }, body }
    const res = {
      statusCode: 0,
      payload: null,
      setHeader() {},
      status(c) { this.statusCode = c; return this },
      json(p) { this.payload = p; resolve({ status: this.statusCode, body: p }) },
    }
    handler(req, res)
  })
}

let pass = 0
let fail = 0
const check = (label, cond, detail) => {
  if (cond) { pass++; console.log('  PASS  ' + label) }
  else { fail++; console.log('  FAIL  ' + label + '   ' + JSON.stringify(detail)) }
}

console.log('\napi/contact.js\n')

{
  const r = await run(good, { method: 'GET' })
  check('GET is rejected', r.status === 405, r)
}

{
  sent = []
  const r = await run(good, { ip: 'a' })
  check('a valid enquiry is accepted', r.status === 200 && r.body.ok, r)
  check('it reaches the webhook', sent.length === 1, sent)
  check('mentions are disarmed', sent[0]?.allowed_mentions?.parse?.length === 0, sent[0])
  check('the message is included', /forty plots/.test(sent[0]?.content || ''), sent[0])
}

{
  sent = []
  const r = await run({ ...good, website: 'http://spam.example' }, { ip: 'b' })
  check('honeypot: looks accepted to the bot', r.status === 200 && r.body.ok, r)
  check('honeypot: nothing is actually sent', sent.length === 0, sent)
}

{
  sent = []
  const r = await run({ ...good, elapsed: 400 }, { ip: 'c' })
  check('too fast: looks accepted to the bot', r.status === 200, r)
  check('too fast: nothing is actually sent', sent.length === 0, sent)
}

{
  sent = []
  const r = await run({ ...good, elapsed: undefined }, { ip: 'd' })
  check('missing timing is treated as a bot', sent.length === 0, sent)
}

{
  const r = await run({ ...good, name: 'A', contact: 'x', message: 'no' }, { ip: 'e' })
  check('short fields are rejected with 422', r.status === 422, r)
  check('every bad field is named', Object.keys(r.body.errors || {}).length === 3, r.body)
}

{
  const r = await run({ ...good, contact: 'bad@nodot' }, { ip: 'f' })
  check('a malformed email is rejected', r.status === 422 && r.body.errors.contact, r.body)
}

{
  const r = await run({ ...good, contact: 'someone#1234' }, { ip: 'g' })
  check('a Discord tag is accepted', r.status === 200, r)
}

{
  const spam = good.message + ' http://a.com http://b.com http://c.com'
  const r = await run({ ...good, message: spam }, { ip: 'h' })
  check('link stuffing is rejected', r.status === 422, r.body)
}

{
  let last
  for (let i = 0; i < 7; i++) last = await run(good, { ip: 'flood' })
  check('the seventh submission is rate limited', last.status === 429, last)
}

{
  const long = 'x'.repeat(9000)
  sent = []
  await run({ ...good, message: long }, { ip: 'i' })
  const len = sent[0]?.content?.length ?? 0
  check('an oversized message is truncated', len <= 1900, len)
}

{
  delete process.env.DISCORD_WEBHOOK_URL
  const r = await run(good, { ip: 'j' })
  check('a missing webhook fails loudly, not silently', r.status === 500, r)
  process.env.DISCORD_WEBHOOK_URL = 'https://example.invalid/hook'
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n')
process.exit(fail ? 1 : 0)
