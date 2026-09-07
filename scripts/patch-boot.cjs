/* The opening curtain stuttered, and it stuttered by construction.
 *
 * It ran a requestAnimationFrame loop for 1500ms that, every single frame,
 * wrote bar.style.width and rewrote the counter's text. Animating width is a
 * layout change, so each frame forced a reflow of the curtain. And it ran at
 * the worst possible moment: while the browser is parsing a 250kB script,
 * building 56 ScrollTriggers, decoding the hero image and loading webfonts.
 * Any animation driven from the main thread at that moment drops frames, and
 * this one was asking the main thread for a layout sixty times a second.
 *
 * Now the bar is a CSS animation on transform: scaleX, which the compositor
 * runs on its own thread. It cannot stutter no matter how busy the main
 * thread is, which is the entire point. The counter is the one thing that
 * genuinely needs JavaScript, so it ticks on a 60ms interval rather than
 * every frame: seventeen text writes instead of ninety, and a dropped frame
 * costs a number rather than a visible hitch.
 *
 * The stroke drawing is desktop only now. SVG stroke-dashoffset is not
 * compositor accelerated either, and eight of them during load is exactly
 * the sort of thing a mid range phone cannot absorb.
 */
const fs = require('fs')
const f = 'public/script.js'
let s = fs.readFileSync(f, 'utf8')
const EOL = s.includes('\r\n') ? '\r\n' : '\n'
const nl = (t) => t.split('\n').join(EOL)

if (s.includes('boot-run')) {
  console.log('already patched')
  process.exit(0)
}

/* 1. the stroke drawing becomes desktop only */
const drawAnchor = nl(`  // Each stroke is dashed by its own length, so it draws rather than fades.
  if (draw) {`)
if (!s.includes(drawAnchor)) throw new Error('draw anchor missing')
s = s.replace(
  drawAnchor,
  nl(`  // Each stroke is dashed by its own length, so it draws rather than fades.
  // SVG stroke animation is not compositor accelerated, so eight of them
  // during load is more than a phone can absorb. Desktop only.
  const drawOK = window.matchMedia("(min-width: 821px)").matches;
  if (draw && !drawOK) draw.style.opacity = "0";
  if (draw && drawOK) {`)
)

/* 2. replace the per frame loop */
const loopAnchor = nl(`  const DUR = 1500;
  const t0 = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / DUR);
    n.textContent = String(Math.round(100 * p)).padStart(3, "0");
    bar.style.width = \`\${p * 100}%\`;
    if (p < 1) { requestAnimationFrame(tick); return; }
    clearTimeout(bail);
    boot.style.transition = "transform .85s cubic-bezier(.76,0,.24,1)";
    boot.style.transform = "translateY(-101%)";
    lockScroll(false);
    setTimeout(drop, 900);
  };
  requestAnimationFrame(tick);`)

if (!s.includes(loopAnchor)) throw new Error('loop anchor missing')

const loopReplacement = nl(`  // The bar is a CSS animation on transform, so the compositor owns it and a
  // busy main thread cannot make it stutter. See .boot-bar in styles.css.
  const DUR = 1100;
  boot.classList.add("boot-run");

  // The counter is the only part that needs scripting. Seventeen writes over
  // the whole run rather than one per frame.
  const t0 = performance.now();
  const count = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / DUR);
    n.textContent = String(Math.round(100 * p)).padStart(3, "0");
    if (p >= 1) clearInterval(count);
  }, 60);

  setTimeout(() => {
    clearInterval(count);
    clearTimeout(bail);
    n.textContent = "100";
    // Lifting the curtain is a transform too, so the exit is composited.
    boot.classList.add("boot-out");
    lockScroll(false);
    setTimeout(drop, 780);
  }, DUR);`)

s = s.replace(loopAnchor, loopReplacement)

/* 3. the safety net has to outlast the new timings */
s = s.replace(
  nl(`  const bail = setTimeout(drop, 3400);`),
  nl(`  const bail = setTimeout(drop, 3000);`)
)

fs.writeFileSync(f, s)
console.log('boot is now compositor driven')
