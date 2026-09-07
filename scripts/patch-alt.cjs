/* Two images were reaching screen readers with nothing to announce.
 *
 * 1. The lightbox <img> had a hardcoded alt="" and was never given one, so
 *    the full screen view of a build announced as nothing at all.
 * 2. The "How I build" step screenshots are content, not decoration. They
 *    illustrate the step beside them and need to say what they show.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const before = s

// script.js is CRLF. Anchors written with \n will not match unless they are
// translated to the file's own line ending first.
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

function sub(rawFrom, rawTo, label) {
  const from = nl(rawFrom)
  const to = nl(rawTo)
  if (!s.includes(from)) {
    if (s.includes(to.split('\n')[0])) {
      console.log('- ' + label + ': already applied')
      return
    }
    throw new Error('anchor missing for ' + label)
  }
  s = s.split(from).join(to)
  console.log('- ' + label + ': patched')
}

/* ------------------------------------------------------------- lightbox */
sub(
  'let lbImages = [];',
  'let lbImages = [];\nlet lbLabel = "";',
  'lightbox label state'
)

sub(
  'function openLightbox(images, index) {\n  lbImages = images;',
  'function openLightbox(images, index, label) {\n  lbImages = images;\n  lbLabel = label || "";',
  'openLightbox signature'
)

sub(
  'if (shot) return openLightbox(p.images, Number(shot.dataset.shot));',
  'if (shot) return openLightbox(p.images, Number(shot.dataset.shot), p.name);',
  'openLightbox caller'
)

sub(
  '  lbNode.querySelector("img").src = lbImages[lbIndex];',
  '  const lbImg = lbNode.querySelector("img");\n' +
    '  lbImg.src = lbImages[lbIndex];\n' +
    '  lbImg.alt = lbLabel\n' +
    '    ? `${lbLabel}, image ${lbIndex + 1} of ${lbImages.length}`\n' +
    '    : `Image ${lbIndex + 1} of ${lbImages.length}`;',
  'lightbox alt'
)

/* ---------------------------------------------------- craft screenshots */
sub(
  'src="${c.img}" srcset="${srcset(c.img)}" sizes="(max-width:900px) 100vw, 620px" alt=""',
  'src="${c.img}" srcset="${srcset(c.img)}" sizes="(max-width:900px) 100vw, 620px" alt="${esc(c.alt)}"',
  'craft screenshot alt'
)

if (s === before) {
  console.log('nothing to do')
  process.exit(0)
}
fs.writeFileSync(f, s)
console.log('script.js patched')
