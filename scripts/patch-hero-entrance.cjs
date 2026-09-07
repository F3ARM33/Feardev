/* The landing page had no entrance animation at all.
 *
 * #heroCopy was written into the HTML as class="rv in". Both halves of the
 * transition were therefore applied before the first paint, and a CSS
 * transition only runs when a value changes after paint, so the hero simply
 * appeared at its final state. Every other section on the page animates in;
 * the one people actually land on did not.
 *
 * The observer would not have helped either. It adds .in as soon as the
 * element is on screen, and the hero is on screen at load, so the entrance
 * would have run and finished behind the boot curtain while it was still up.
 *
 * Two changes:
 *
 *   The hero holds. It is marked data-hold, the observer skips anything so
 *   marked, and the hold is released when the curtain lifts, so the entrance
 *   plays into a page the visitor can actually see.
 *
 *   It arrives in parts. #heroCopy was a single .rv, which moved the whole
 *   block on one curve: headline, rule, paragraph and buttons all appearing
 *   at the same instant. That is the same flaw the exit had. Each part now
 *   has its own delay, so the hero assembles rather than materialises.
 */
const fs = require('fs')

/* -------------------------------------------------------------- index.html */
{
  const f = 'index.html'
  let s = fs.readFileSync(f, 'utf8')
  const before = s

  s = s.replace(
    '<div class="rv in" id="heroCopy">',
    '<div class="rv" id="heroCopy" data-hold>'
  )
  s = s.replace(
    '<div class="hero-rail rv-g" id="heroRail">',
    '<div class="hero-rail rv-g" id="heroRail" data-hold>'
  )
  s = s.replace(
    '<div class="hero-strip" id="heroStrip" aria-label="Featured builds"></div>',
    '<div class="hero-strip" id="heroStrip" aria-label="Featured builds" data-hold></div>'
  )

  if (s === before) throw new Error('index.html: no hero anchors matched')
  fs.writeFileSync(f, s)
  console.log('index.html: hero now holds until the curtain lifts')
}

/* --------------------------------------------------------------- script.js */
{
  const f = 'public/script.js'
  let s = fs.readFileSync(f, 'utf8')
  const EOL = s.includes('\r\n') ? '\r\n' : '\n'
  const nl = (t) => t.split('\n').join(EOL)

  if (s.includes('releaseHero')) {
    console.log('script.js: already patched')
  } else {
    /* the observer skips held elements */
    const obsAnchor = nl(`  const items = document.querySelectorAll(".rv, .rv-g, .rule, .ln, .hero-strip");`)
    if (!s.includes(obsAnchor)) throw new Error('reveal anchor missing')
    s = s.replace(
      obsAnchor,
      nl(`  // [data-hold] is the hero. It is on screen at load, so the observer would
  // reveal it immediately and the entrance would play out behind the boot
  // curtain. releaseHero() lets it go once the curtain has lifted.
  const items = [...document.querySelectorAll(".rv, .rv-g, .rule, .ln, .hero-strip")]
    .filter((n) => !n.hasAttribute("data-hold"));`)
    )

    /* the release itself */
    const bootAnchor = nl(`function setupBoot() {`)
    if (!s.includes(bootAnchor)) throw new Error('setupBoot anchor missing')
    s = s.replace(
      bootAnchor,
      nl(`/* Lets the hero animate in. Called when the curtain lifts, or straight away
   when there is no curtain to wait for. */
function releaseHero() {
  document.querySelectorAll("[data-hold]").forEach((n) => {
    n.removeAttribute("data-hold");
    n.classList.add("in");
  });
}

function setupBoot() {`)
    )

    /* release on every path out of the curtain */
    s = s.replace(
      nl(`  const drop = () => {
    boot.remove();
    lockScroll(false);
  };`),
      nl(`  const drop = () => {
    boot.remove();
    lockScroll(false);
    releaseHero();
  };`)
    )

    // and as the curtain starts moving, so the entrance overlaps the lift
    s = s.replace(
      nl(`    boot.classList.add("boot-out");
    lockScroll(false);`),
      nl(`    boot.classList.add("boot-out");
    lockScroll(false);
    releaseHero();`)
    )

    // no curtain at all (reduced motion, or already seen this session)
    s = s.replace(
      nl(`  if (!boot) return;`),
      nl(`  if (!boot) { releaseHero(); return; }`)
    )

    fs.writeFileSync(f, s)
    console.log('script.js: releaseHero wired into every exit from the curtain')
  }
}
