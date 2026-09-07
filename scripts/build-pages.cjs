/* Generates the three standalone pages that share the site's chrome but not
 * its JavaScript: the privacy policy, the terms, and the 404. Keeping them
 * generated from one head template means the meta tags, the favicon set and
 * the font loading can never drift apart from each other.
 *
 * Run with: node scripts/build-pages.cjs
 */
const fs = require('fs')
const path = require('path')

const OUT = path.join(__dirname, '..', 'public')
const OG = 'https://f34r.dev/img/og-cover.jpg?v=4'
const DISCORD = 'https://discord.com/users/1088022144308486176'

const head = (title, desc, urlPath, robots) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#08080a" />
  <meta name="color-scheme" content="dark" />
  <meta name="description" content="${desc}" />
  <meta name="robots" content="${robots}" />
  <meta name="author" content="f34r" />
  <title>${title}</title>
  <link rel="canonical" href="https://f34r.dev${urlPath}" />
  <meta property="og:site_name" content="f34r.dev" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://f34r.dev${urlPath}" />
  <meta property="og:image" content="${OG}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${desc}" />
  <meta name="twitter:image" content="${OG}" />
  <link rel="icon" href="/img/logo.svg" type="image/svg+xml" />
  <link rel="icon" href="/img/favicon-32.png" sizes="32x32" />
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
<div class="amb" aria-hidden="true"><i></i><i></i></div>
<div class="grain" aria-hidden="true"></div>
`

const foot = `
<footer class="wrap foot">
  <span>&copy; 2026 f34r.dev</span>
  <nav class="foot-links" aria-label="Site">
    <a href="/">Work</a>
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
    <a href="${DISCORD}" target="_blank" rel="noreferrer">Discord</a>
  </nav>
</footer>
<script defer src="/consent.js"></script>
</body>
</html>
`

const back = `  <a class="page-back" href="/">&larr; Back to the work</a>\n`

const pages = {}

pages['privacy.html'] =
  head(
    'Privacy policy &mdash; f34r.dev',
    'What f34r.dev collects, what it does not, and how to reach me about it.',
    '/privacy',
    'index,follow'
  ) +
  `<main class="page page-doc">
${back}  <h1>Privacy policy</h1>
  <span class="stamp">Last updated 7 September 2026</span>

  <p>This is a one person portfolio. I am <strong>f34r</strong>, a freelance Roblox
  environment and map builder. This page explains, in plain language, what this
  site does and does not collect. There is no marketing department behind it, and
  nothing here is sold to anyone.</p>

  <h2>The short version</h2>
  <ul>
    <li>No advertising cookies. No tracking cookies. No third party trackers.</li>
    <li>Anonymous, cookieless page view counts, <strong>only</strong> if you agree to them.</li>
    <li>If you send me a message, I keep it so that I can reply to you.</li>
    <li>I never sell or share your details.</li>
  </ul>

  <h2>Analytics</h2>
  <p>If you choose <strong>Allow</strong> on the banner, this site loads Vercel
  Web Analytics. It is cookieless and privacy focused: it records the page
  visited, a rough country, and the type of device and browser. It does not set
  a cross site identifier, does not build a profile of you, and cannot follow
  you to other websites.</p>
  <p>If you choose <strong>Decline</strong>, the analytics script is never
  fetched at all. Your answer is stored in your browser under the local storage
  key <code>f34r.consent.v1</code> so that the banner does not ask again. That
  value never leaves your device, and clearing your site data resets it.</p>
  <p>If your browser sends a
  <a href="https://globalprivacycontrol.org/" target="_blank" rel="noreferrer">Global Privacy Control</a>
  signal, I treat that as a decline and do not show the banner at all.</p>

  <h2>The contact form</h2>
  <p>When you submit the form I receive the name, the Discord tag or email
  address, the optional game and scope note, and the message you wrote. It is
  delivered to a private Discord channel that only I can read. I keep enquiries
  so that I can reply, and so that I have a record of work discussed.</p>
  <p>The form also records how long the page was open before you submitted it,
  and includes a field that is hidden from people. Both exist purely to reject
  automated spam, and neither is stored.</p>
  <p>The legal basis is your consent, given by choosing to send the message. I
  delete enquiries that do not lead to work once they are clearly stale, and you
  can ask me to delete yours at any time.</p>

  <h2>Hosting and logs</h2>
  <p>The site is hosted by
  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel</a>.
  Like any web host, their servers keep short lived request logs that include IP
  addresses, for security and for keeping the service running. I do not use
  those logs to identify anyone. The contact endpoint holds an IP address in
  memory only long enough to rate limit submissions, and never writes it down.</p>

  <h2>Things loaded from elsewhere</h2>
  <p>To render, the site fetches fonts from Google Fonts and script libraries
  from jsDelivr and Cloudflare. Requesting a file from a server means that
  server sees your IP address, which is true of any website. I do not give any
  of them information about you.</p>
  <p>The contact section shows my live Discord presence through the public
  Lanyard API. That is a request for <em>my</em> status, and it sends nothing
  about you.</p>

  <h2>Your rights</h2>
  <p>You can ask me what I hold about you, ask for a copy, ask me to correct it,
  or ask me to delete it. Message me on Discord and I will do it. There is no
  process to go through and no form to fill in.</p>

  <h2>Children</h2>
  <p>This is a business portfolio aimed at people commissioning work, not at
  children. I do not knowingly collect anything from anyone under 13. If you
  believe a child has sent me something, tell me and I will delete it.</p>

  <h2>Changes</h2>
  <p>If this policy changes, the date at the top of the page changes with it.</p>

  <h2>Contact</h2>
  <p>Any question about this page:
  <a href="${DISCORD}" target="_blank" rel="noreferrer">message me on Discord</a>.</p>
</main>` +
  foot

pages['terms.html'] =
  head(
    'Terms &amp; conditions &mdash; f34r.dev',
    'How commissions work: quotes, payment, revisions, ownership and delivery.',
    '/terms',
    'index,follow'
  ) +
  `<main class="page page-doc">
${back}  <h1>Terms &amp; conditions</h1>
  <span class="stamp">Last updated 7 September 2026</span>

  <p>These terms cover the use of this website and the way I take on build work.
  They are written to be read, not to hide anything. Where a signed agreement or
  a platform's own contract covers a specific commission, that agreement wins
  over this page.</p>

  <h2>1. The website</h2>
  <p>Everything on f34r.dev is provided as is. I keep it accurate, but I do not
  guarantee that it is complete or available without interruption. Visit counts
  and similar figures describe games I have contributed builds to. They are not
  a claim that I made those games alone, and not a promise of what your game
  will do.</p>

  <h2>2. My work belongs to me until it is paid for</h2>
  <p>Every build, screenshot and render on this site is my own work, and is
  protected by copyright. You may not reuse, resell, redistribute or present it
  as yours, and you may not use it to train a model, without my written
  permission. Linking to the site is always fine.</p>

  <h2>3. Quotes and scope</h2>
  <p>Before anything is built you get a written plan, a timeline and a
  <strong>fixed quote</strong>. That quote covers the scope described in it and
  nothing else. If you later want something outside that scope, it is new work
  and it is quoted separately. Neither of us is committed until we have both
  agreed the scope in writing.</p>

  <h2>4. Payment</h2>
  <ul>
    <li>Larger commissions are split, with a deposit before work starts and the
    balance on delivery. The split is agreed in the quote.</li>
    <li>Files are delivered once payment has cleared.</li>
    <li>The deposit covers time already committed, and is not refundable once
    building has begun.</li>
  </ul>

  <h2>5. Revisions</h2>
  <p>Revisions happen <strong>during</strong> the build, at the checkpoints set
  out in the plan, and that is where your feedback has the most effect. Each
  stage is signed off before I move on to the next one.</p>
  <p>Once a build is signed off, delivered and paid for, the commission is
  finished. Changes requested after that point are new work, and are quoted as
  new work. This is not me being difficult: it is the only way a fixed quote can
  stay fixed.</p>

  <h2>6. Ownership after delivery</h2>
  <p>On full payment you get the right to use the delivered build in the game it
  was commissioned for, including publishing and monetising that game. Unless we
  agree otherwise in writing:</p>
  <ul>
    <li>I keep the copyright in the underlying work and in my reusable techniques.</li>
    <li>You may not resell or redistribute the build as an asset in its own right.</li>
    <li>I may show the work in my portfolio and on social media. If you need it
    kept private, say so before it is built and I will honour that.</li>
  </ul>

  <h2>7. Timelines</h2>
  <p>Dates in a quote are honest estimates, and I will tell you early if one is
  slipping. Time spent waiting on your feedback, references or assets is not
  counted against my delivery time.</p>

  <h2>8. Cancellation</h2>
  <p>You can cancel at any time. You pay for the work completed up to that point
  and you receive whatever has been finished. If I have to cancel, I refund
  anything paid for work I have not done.</p>

  <h2>9. What I am not responsible for</h2>
  <p>I am responsible for delivering the build described in the quote, to the
  standard shown on this site. I am not responsible for how a game performs
  commercially, for changes Roblox makes to its engine or its rules, or for
  losses that follow indirectly from the work. Where I am liable, that liability
  is limited to what you paid me for the commission concerned.</p>

  <h2>10. Conduct</h2>
  <p>The contact form is for genuine commission enquiries. Please do not use it,
  or any other part of this site, to send spam, abuse, or anything unlawful.</p>

  <h2>11. Questions</h2>
  <p>If anything here is unclear, ask before you commission rather than after.
  <a href="${DISCORD}" target="_blank" rel="noreferrer">Message me on Discord</a>.</p>
</main>` +
  foot

pages['404.html'] =
  head(
    'Page not found &mdash; f34r.dev',
    'That page does not exist. Head back to the builds.',
    '/404.html',
    'noindex,follow'
  ) +
  `<main class="nf">
  <div>
    <p class="nf-code" aria-hidden="true">404</p>
    <h1>This one was never built.</h1>
    <p>That page does not exist, or it has moved. The builds are all still
    where you left them.</p>
    <div class="nf-row">
      <a class="dock-pill" href="/">
        <span class="dock-dot" aria-hidden="true"></span>
        <span class="dock-label">Back to the work</span>
      </a>
      <a class="page-back" style="margin:0;align-self:center" href="${DISCORD}" target="_blank" rel="noreferrer">Message me instead</a>
    </div>
  </div>
</main>` +
  foot

for (const [name, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(OUT, name), html)
  console.log('wrote public/' + name + '  (' + html.length + ' bytes)')
}
