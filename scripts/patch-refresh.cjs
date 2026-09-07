/* ScrollTrigger was measuring the page once, on load, and then trusting those
 * numbers forever.
 *
 * It cannot. Most images on this page are loading="lazy", so they arrive as
 * you scroll toward them, and each one that arrives changes the height of the
 * document underneath every trigger below it. Measured on a real load, the
 * craft section really begins at 13884px while ScrollTrigger still believed
 * 10595: adrift by 3289px, which is more than the section is tall. By the
 * time you reach it, its trigger has already passed its own end, so onUpdate
 * stops firing and the step never advances. The same drift is what stops the
 * review deck animating and makes the shelf pinning fight the scroll.
 *
 * The fix is to re-measure whenever the page actually changes size, rather
 * than guessing a moment when it has stopped.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

const anchor = nl(`  // Images finish loading after ScrollTrigger measures, which shifts every
  // start and end. Recalculate once everything has settled.
  window.addEventListener("load", () => ScrollTrigger.refresh());`)

if (!s.includes(anchor)) {
  console.log(s.includes('watchLayout') ? 'already patched' : 'ANCHOR MISSING')
  process.exit(s.includes('watchLayout') ? 0 : 1)
}

const replacement = nl(`  watchLayout();
}

/* Keeps ScrollTrigger's measurements honest.
 *
 * A single refresh on load is not enough. Images below the fold are lazy, so
 * they load as they are approached, and every one of them changes the height
 * of the document beneath every trigger below it. Left alone the drift
 * accumulates into thousands of pixels, and triggers near the bottom of the
 * page pass their own end before you ever reach them.
 *
 * So: refresh when the fonts land, when the page finishes loading, and after
 * that whenever the document's height actually changes. The refresh is
 * debounced, and skipped entirely when the height has not moved, so scrolling
 * a settled page costs nothing. */
function watchLayout() {
  if (!window.ScrollTrigger) return;

  let lastHeight = document.documentElement.scrollHeight;
  let queued = 0;

  const refresh = () => {
    queued = 0;
    lastHeight = document.documentElement.scrollHeight;
    ScrollTrigger.refresh();
  };

  const schedule = () => {
    if (queued) clearTimeout(queued);
    queued = setTimeout(refresh, 180);
  };

  const ifChanged = () => {
    if (document.documentElement.scrollHeight !== lastHeight) schedule();
  };

  window.addEventListener("load", schedule);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);

  // Every lazy image that arrives, anywhere on the page.
  document.addEventListener("load", (e) => {
    if (e.target && e.target.tagName === "IMG") ifChanged();
  }, true);

  // Anything else that changes the page: the React islands mounting, the
  // Discord card filling in, a section growing when its content arrives.
  if ("ResizeObserver" in window) {
    let first = true;
    new ResizeObserver(() => {
      if (first) { first = false; return; }
      ifChanged();
    }).observe(document.documentElement);
  }

  // The islands say when they are up, since they mount well after load.
  window.addEventListener("f34r:mounted", schedule);`)

s = s.replace(anchor, replacement)
fs.writeFileSync(f, s)
console.log('ScrollTrigger now re-measures whenever the page height changes')
