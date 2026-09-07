/* Corrects two faults in the hero exit I introduced a moment ago.
 *
 * 1. Double ownership. The exit animated .hero-sub and .hero-ctas, and the
 *    new entrance CSS animates the same two elements. That is precisely the
 *    rule this file states at the top of setupMotion, broken again.
 *
 * 2. Start values captured while the hero was hidden. A scrubbed tween
 *    records its start value the first time it renders, which is the moment
 *    it is created. The hero is now held at opacity 0 until the curtain
 *    lifts, so a timeline built at DOMContentLoaded recorded opacity 0 as the
 *    starting opacity and pinned those elements invisible for good. This is
 *    the same failure that once left a whole section blank.
 *
 * The exit therefore moves to elements CSS does not touch:
 *
 *    .ln          the line boxes; CSS animates the spans inside them
 *    #heroCopy    the copy block; CSS no longer transitions it, only children
 *    .hero-rail   CSS animates its figures, not the rail
 *    .hero-strip  CSS animates the .hs thumbnails, not the strip
 *
 * and it is built when the hero is released rather than at DOMContentLoaded,
 * so every start value is read from a hero that is actually visible.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

if (s.includes('buildHeroExit')) {
  console.log('already patched')
  process.exit(0)
}

/* ---------------------------------------- replace the timeline in setupMotion */
const start = s.indexOf(nl('  /* -- Hero.'))
const endMark = nl('  /* -- THE REEL.')
const end = s.indexOf(endMark)
if (start < 0 || end < 0 || end < start) throw new Error('hero block not found')

const replacement = nl(`  // The hero exit is built when the hero is released, not here. A scrubbed
  // tween reads its start values the moment it is created, and until the
  // curtain lifts the hero is deliberately at opacity 0, so building it now
  // would record "invisible" as the starting state and pin it there.
  buildHeroExit();

`)

s = s.slice(0, start) + replacement + s.slice(end)

/* ------------------------------------------------- add the builder itself */
const anchor = nl(`/* Lets the hero animate in. Called when the curtain lifts, or straight away
   when there is no curtain to wait for. */
function releaseHero() {`)
if (!s.includes(anchor)) throw new Error('releaseHero anchor missing')

const builder = nl(`/* The hero does not leave, it is left behind: the words go first and
   fastest, the numbers follow, and the photograph drifts on long after both,
   so the build is still on screen as the reader arrives in the work.

   One timeline rather than six triggers, and one owner per property. CSS owns
   every entrance in the hero, so this touches only what CSS does not: the
   line boxes rather than the spans inside them, the copy block rather than
   its paragraphs, the rail rather than its figures, the strip rather than its
   thumbnails.

   scrub is a number, not true. true pins the animation rigidly to the wheel,
   so every jitter in the scroll shows up in the motion. 0.8 gives it eight
   tenths of a second of catch up, which is the difference between motion that
   feels weighted and motion that feels mechanical. */
let heroExitBuilt = false;

function buildHeroExit() {
  if (heroExitBuilt) return;
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!document.querySelector(".hero")) return;
  heroExitBuilt = true;

  const lines = gsap.utils.toArray(".hero h1 .ln");

  gsap
    .timeline({
      defaults: { ease: "power2.in" },
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
    })
    // the headline goes first, a line at a time, rising out of its own box
    .to(lines, { yPercent: -115, opacity: 0, duration: 0.42, stagger: 0.05 }, 0)
    // then the block that carries the rule, the paragraph and the buttons
    .to("#heroCopy", { y: -54, opacity: 0, duration: 0.5 }, 0.1)
    // the numbers hold a moment longer
    .to(".hero-rail", { y: -34, opacity: 0, duration: 0.52 }, 0.2)
    // and the thumbnails settle downward rather than up, so the two edges of
    // the screen do not leave in the same direction
    .to(".hero-strip", { y: 30, opacity: 0, duration: 0.52 }, 0.26)
    // the photograph is the slow layer under all of it: eased out, not in, so
    // it moves most while the copy is still there and then settles
    .fromTo(
      ".hero-media img",
      { yPercent: 0, scale: 1.08 },
      { yPercent: 9, scale: 1.17, ease: "power1.out", duration: 1 },
      0
    );
}

`)

s = s.replace(anchor, builder + anchor)

/* ------------------------- build it once the hero is actually on screen */
s = s.replace(
  nl(`function releaseHero() {
  document.querySelectorAll("[data-hold]").forEach((n) => {
    n.removeAttribute("data-hold");
    n.classList.add("in");
  });
}`),
  nl(`function releaseHero() {
  document.querySelectorAll("[data-hold]").forEach((n) => {
    n.removeAttribute("data-hold");
    n.classList.add("in");
  });
  // Now that the hero is visible, its start values are the real ones.
  requestAnimationFrame(buildHeroExit);
  // rAF does not fire in a background tab, and the exit must exist either way.
  setTimeout(buildHeroExit, 500);
}`)
)

fs.writeFileSync(f, s)
console.log('hero exit rebuilt: no shared properties, built after release')
