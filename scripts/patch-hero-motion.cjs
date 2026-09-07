/* The landing page felt stiff on the way out, and there was a real bug under
 * it as well as a design problem.
 *
 * The bug: three different things owned the hero image's transform at once.
 * CSS set scale(1.08), a 2.4s entrance tween drove scale to 1, and a scrubbed
 * tween drove scale to 1.14. The scrub records its starting value when it is
 * created, so scrolling while the entrance tween was still running let the
 * scrub overwrite it mid flight and the image jumped. That is the sudden
 * zoom. This file's own rule at the top of setupMotion says CSS owns
 * entrances and GSAP owns scrub, and the entrance tween broke it.
 *
 * The design problem: everything left at once. .hero-in was a single target
 * moving as one block with ease:"none", so the headline, the paragraph, the
 * buttons and the numbers all departed on the same curve at the same instant.
 * That reads as the whole page being yanked rather than as a composition
 * leaving.
 *
 * And scrub:true locks the animation rigidly to the wheel, so every jitter in
 * the scroll maps straight onto the motion. A numeric scrub gives it a short
 * catch up, which is what makes a scroll animation feel weighted instead of
 * mechanical.
 *
 * So: one timeline, one owner per property, layered departure, eased.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

if (s.includes('heroOut')) {
  console.log('already patched')
  process.exit(0)
}

const anchor = nl(`  /* -- Hero. The copy leaves before the image does, so the build stays on
        screen as the reader moves down into the work. -- */
  gsap.to(".hero-media img", {
    scale: 1,
    duration: 2.4,
    ease: "power2.out",
  });
  gsap.to(".hero-media img", {
    yPercent: 12,
    scale: 1.14,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".hero-in", {
    yPercent: -16,
    opacity: 0,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "72% top", scrub: true },
  });`)

if (!s.includes(anchor)) throw new Error('hero motion anchor missing')

const replacement = nl(`  /* -- Hero.
        The hero does not leave, it is left behind: the words go first and
        fastest, the numbers follow, and the photograph drifts on long after
        both, so the build is still there as the reader arrives in the work.

        One timeline rather than six triggers, and one owner per property.
        CSS owns every entrance here (.rv, .rv-g, .ln > span, .hs), so this
        touches only elements CSS does not animate: the line boxes, not the
        spans inside them; the rail, not the figures inside it.

        scrub is a number, not true. true pins the animation rigidly to the
        wheel and every jitter in the scroll shows up in the motion; 0.8 gives
        it eight tenths of a second of catch up, which is the difference
        between motion that feels weighted and motion that feels mechanical. -- */
  const heroLines = gsap.utils.toArray(".hero h1 .ln");

  const heroOut = gsap.timeline({
    defaults: { ease: "power2.in" },
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
    },
  });

  heroOut
    // The headline leaves first, a line at a time, rising out of its own box.
    .to(heroLines, { yPercent: -115, opacity: 0, duration: 0.42, stagger: 0.05 }, 0)
    .to(".hero-dim", { yPercent: -70, opacity: 0, duration: 0.4 }, 0.06)
    .to(".hero-sub", { y: -46, opacity: 0, duration: 0.44 }, 0.1)
    .to(".hero-ctas", { y: -34, opacity: 0, duration: 0.44 }, 0.16)
    // The numbers hold a moment longer, then slide rather than fade.
    .to(".hero-rail", { y: -30, opacity: 0, duration: 0.5 }, 0.2)
    .to(".hero-strip", { y: 26, opacity: 0, duration: 0.5 }, 0.26)
    // The photograph is the slow layer underneath all of it. Ease out, not
    // in, so it moves most while the copy is still on screen and then settles
    // rather than accelerating away.
    .fromTo(
      ".hero-media img",
      { yPercent: 0, scale: 1.08 },
      { yPercent: 9, scale: 1.17, ease: "power1.out", duration: 1 },
      0
    );`)

s = s.replace(anchor, replacement)
fs.writeFileSync(f, s)
console.log('hero exit rebuilt as one layered timeline')
