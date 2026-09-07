/* Mobile scrolling.
 *
 * The reel gives every panel five scrubbed tweens, and the comment above them
 * claims all of it stays on the compositor. Two of the five do not:
 *
 *   clipPath: inset(0% 44% 0% 44%) -> inset(0)
 *       clip-path is not compositor accelerated on mobile browsers. Scrubbing
 *       it repaints a full screen element on every frame of the scroll.
 *
 *   scale: 1.32 -> 1 on the panel's <img>
 *       Scaling a bitmap forces it to be re-rasterised at each new scale, so
 *       this is a full size image redraw per frame rather than a cheap
 *       transform.
 *
 * Six panels, so on a phone that is twelve per frame repaints fighting the
 * scroll. The other three tweens are transform and opacity and are genuinely
 * cheap, so they stay everywhere.
 *
 * On small screens both expensive tweens are simply not created. That also
 * removes twelve of the page's ScrollTriggers.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

if (s.includes('heavyOK')) {
  console.log('already patched')
  process.exit(0)
}

/* 1. the flag */
const flagAnchor = nl(`  const panels = gsap.utils.toArray(".panel");`)
if (!s.includes(flagAnchor)) throw new Error('panels anchor missing')

s = s.replace(
  flagAnchor,
  nl(`  // Two of the reel's five tweens per panel repaint rather than composite:
  // the clip path reveal, and the scale on the image. On a phone that is a
  // full screen repaint per frame, per panel, which is what makes scrolling
  // the reel stutter. They are desktop only. The rest are transform and
  // opacity and run everywhere.
  const heavyOK = window.matchMedia("(min-width: 821px)").matches;

  const panels = gsap.utils.toArray(".panel");`)
)

/* 2. gate the clip path reveal */
const clipAnchor = nl(`    gsap.fromTo(
      slab,
      { clipPath: "inset(0% 44% 0% 44%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power2.out",
        scrollTrigger: { trigger: panel, start: "top bottom", end: "top 12%", scrub: true },
      }
    );
    gsap.fromTo(
      img,
      { scale: 1.32 },
      { scale: 1, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "top top", scrub: true } }
    );`)

if (!s.includes(clipAnchor)) throw new Error('clip/scale anchor missing')

s = s.replace(
  clipAnchor,
  nl(`    if (heavyOK) {
      gsap.fromTo(
        slab,
        { clipPath: "inset(0% 44% 0% 44%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.out",
          scrollTrigger: { trigger: panel, start: "top bottom", end: "top 12%", scrub: true },
        }
      );
      gsap.fromTo(
        img,
        { scale: 1.32 },
        { scale: 1, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "top top", scrub: true } }
      );
    }`)
)

fs.writeFileSync(f, s)
console.log('reel: clip path and image scale are now desktop only')
