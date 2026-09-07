/* liquid-glass-js redraws on every scroll event, and reads
 * getBoundingClientRect() while doing it.
 *
 * That is a forced synchronous layout plus a WebGL draw, on the main thread,
 * once per scroll event. Lenis drives smooth scrolling by firing scroll
 * events every animation frame, so on this site that is a reflow and a draw
 * every single frame for the entire length of the page, to update a pill
 * that is position:fixed and therefore never actually moves.
 *
 * Two changes, both to the vendored copy:
 *
 *   1. Coalesce to one draw per animation frame instead of one per event,
 *      and read the rect inside that frame rather than inside the handler.
 *   2. Skip the work entirely while the element is off screen or hidden,
 *      which is the whole time the dock is tucked away in the hero.
 */
const fs = require('fs')
const f = 'public/vendor/liquid-glass/container.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

const anchor = nl(`    const handleScroll = () => render()
    window.addEventListener('scroll', handleScroll, { passive: true })`)

if (!s.includes(anchor)) {
  console.log(s.includes('LOCAL PATCH: coalesce') ? 'already patched' : 'ANCHOR MISSING')
  process.exit(s.includes('LOCAL PATCH: coalesce') ? 0 : 1)
}

const replacement = nl(`    // LOCAL PATCH: coalesce the scroll redraw to one per animation frame,
    // and do nothing at all while the element is not on screen. Upstream
    // rendered once per scroll event, and each render reads
    // getBoundingClientRect(), so with a smooth scroll library firing an
    // event every frame this was a forced layout plus a WebGL draw per
    // frame for the whole page. See SOURCE.md.
    let frameQueued = false
    let onScreen = true

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        ([e]) => { onScreen = e.isIntersecting },
        { rootMargin: '80px' }
      ).observe(this.element)
    }

    const handleScroll = () => {
      if (frameQueued || !onScreen) return
      frameQueued = true
      requestAnimationFrame(() => {
        frameQueued = false
        if (onScreen) render()
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })`)

s = s.replace(anchor, replacement)
fs.writeFileSync(f, s)

fs.appendFileSync(
  'public/vendor/liquid-glass/SOURCE.md',
  '\nLocal patch: the scroll redraw is coalesced to one per animation frame and\n' +
    'skipped while the element is off screen. Upstream redrew once per scroll\n' +
    'event, reading getBoundingClientRect() each time, which with a smooth\n' +
    'scroll library is a forced layout and a WebGL draw every frame.\n'
)

console.log('glass redraw is now one per frame, and only while on screen')
