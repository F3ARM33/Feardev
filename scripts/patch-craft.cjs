/* "How I build" stopped advancing, and it was not the WebGL layers.
 *
 * Measured on the live site: #craft occupies 13149 to 14750, but its
 * ScrollTrigger's active range was 9750 to 12555. The trigger ended 594px
 * before the section even began, so by the time you scrolled down to read it
 * the trigger had long since finished and onUpdate never fired again. The
 * step stayed on whatever it was last set to.
 *
 * The cause is refresh order. The reel pins a section, and a pin adds a
 * spacer roughly 2200px tall to the document. #craft sits below that pin, so
 * where it lands depends on the spacer existing. Its trigger is created in
 * setupCraft, before the pin is created, and ScrollTrigger refreshes triggers
 * in creation order, so craft measured itself against a page that did not yet
 * contain the spacer. Every other trigger on the page is out by exactly one
 * viewport height, which is simply what start:"top bottom" means. Only craft
 * was genuinely adrift, by 2196px.
 *
 * Rather than fight the refresh order, remove the dependency. pick() already
 * measures the steps live with getBoundingClientRect on every call, so it
 * needs no cached geometry at all: a plain scroll listener, coalesced to one
 * call per animation frame, is both simpler and immune to this entire class
 * of problem. It also removes one of the page's 56 triggers.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

const anchor = nl(`  if (window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: "#craft",
      start: "top bottom",
      end: "bottom top",
      onUpdate: pick,
      onRefresh: pick,
    });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(pick, { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] });
    steps.forEach((st) => io.observe(st));
  }
  pick();`)

if (!s.includes(anchor)) {
  console.log(s.includes('needs no cached geometry') ? 'already patched' : 'ANCHOR MISSING')
  process.exit(s.includes('needs no cached geometry') ? 0 : 1)
}

const replacement = nl(`  // Driven straight from the scroll position, not from ScrollTrigger.
  //
  // pick() measures the steps live on every call, so it needs no cached
  // geometry, which is exactly what went wrong before: craft's trigger was
  // created before the reel's pin existed, measured itself against a page
  //2196px shorter than the real one, and ended before the section it was
  // watching had even started. Reading the scroll position directly cannot
  // drift, because there is nothing held between reads.
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      pick();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  // Lenis drives its own scroll and does not always emit a window scroll
  // event, so listen to it too when it is there.
  if (window.lenis && window.lenis.on) window.lenis.on("scroll", onScroll);

  pick();`)

s = s.replace(anchor, replacement)
fs.writeFileSync(f, s)
console.log('craft now reads the scroll position directly')
