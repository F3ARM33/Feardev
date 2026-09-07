/* The Discord display name colour comes straight from the Lanyard API, so
 * it is whatever Nitro name styling happens to be set to. The current one
 * (a dark red) lands at 3.84:1 on the card, under the 4.5:1 needed for body
 * text, and it can change at any time without a deploy.
 *
 * Rather than hardcode a colour and lose the personalisation, keep the hue
 * and lift the lightness only as far as it takes to reach 4.5:1.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

const anchor = nl(`  const nameEl = document.querySelector(".discord-username");
  const nameColor = du?.display_name_styles?.colors?.[0];
  if (nameEl && typeof nameColor === "number") {
    nameEl.style.color = \`#\${nameColor.toString(16).padStart(6, "0")}\`;
  }`)

if (!s.includes(anchor)) {
  console.log(s.includes('readableOn') ? 'already patched' : 'ANCHOR MISSING')
  process.exit(s.includes('readableOn') ? 0 : 1)
}

const helper = nl(`/* Relative luminance, per WCAG. */
function relLum([r, g, b]) {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(a, b) {
  const l1 = relLum(a), l2 = relLum(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

/* Takes a colour and the background it sits on, and returns the closest
   colour to it that still reaches the target contrast. The hue is kept and
   only the lightness moves, so a personalised colour stays recognisable
   while remaining readable. */
function readableOn(rgb, bg, target = 4.5) {
  if (contrast(rgb, bg) >= target) return rgb;
  const toward = relLum(bg) > 0.5 ? 0 : 255;
  let lo = 0, hi = 1, best = rgb.map(() => toward);
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    const test = rgb.map((v) => Math.round(v + (toward - v) * mid));
    if (contrast(test, bg) >= target) { best = test; hi = mid; } else { lo = mid; }
  }
  return best;
}

`)

const replacement = nl(`  const nameEl = document.querySelector(".discord-username");
  const nameColor = du?.display_name_styles?.colors?.[0];
  if (nameEl && typeof nameColor === "number") {
    const rgb = [(nameColor >> 16) & 255, (nameColor >> 8) & 255, nameColor & 255];
    // The card this sits on, so the check is against what is really behind it.
    const safe = readableOn(rgb, [22, 22, 28]);
    nameEl.style.color = \`rgb(\${safe[0]}, \${safe[1]}, \${safe[2]})\`;
  }`)

s = s.replace(anchor, replacement)

// Put the helpers just above the function that uses them.
const fnAnchor = nl('  // Discord\'s custom display-name color (from Nitro name styling), if set')
const owner = s.lastIndexOf('function ', s.indexOf(fnAnchor))
s = s.slice(0, owner) + helper + s.slice(owner)

fs.writeFileSync(f, s)
console.log('discord username colour is now contrast clamped')
