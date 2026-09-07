/* The two Vercel analytics scripts were loaded unconditionally. They are now
 * loaded by consent.js, and only after the visitor agrees, so the banner
 * describes something real. The queue shims stay inline so that any call made
 * before the script arrives is still buffered.
 */
const fs = require('fs')
const f = 'index.html'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

const oldBlock = [
  '<!-- Vercel Web Analytics (static HTML, no npm package needed) -->',
  "<script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };</script>",
  '<script defer src="/_vercel/insights/script.js"></script>',
  '',
  '<!-- Vercel Speed Insights -->',
  "<script>window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };</script>",
  '<script defer src="/_vercel/speed-insights/script.js"></script>',
].join('\n')

const normalized = nl(oldBlock)

if (!s.includes(normalized)) {
  if (s.includes('/_vercel/insights/script.js')) {
    throw new Error('analytics block present but did not match the expected shape')
  }
  console.log('already patched')
  process.exit(0)
}

const newBlock = nl(
  [
    '<!-- Vercel Web Analytics and Speed Insights.',
    '     Both are cookieless, and both are fetched by consent.js only after the',
    '     visitor has agreed. The queue shims are inline so that anything called',
    '     before the scripts land is still buffered. -->',
    "<script>window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };",
    "window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };</script>",
  ].join('\n')
)

s = s.replace(normalized, newBlock)
fs.writeFileSync(f, s)
console.log('analytics moved behind consent')
