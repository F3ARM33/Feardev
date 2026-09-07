import { canRunWebGL } from './gate'

// The site is vanilla. This entry decides one thing: whether the device can
// afford WebGL at all. Nothing else is imported statically, so a phone, a
// low end laptop, or anyone with reduced motion turned on downloads this
// file and stops. React, three.js and the shaders are never fetched.
if (canRunWebGL()) {
  // Hold the island back until after first paint so it can never delay the
  // headline. requestAnimationFrame is the right signal, but it never fires
  // in a background or throttled tab, so a timer backs it up and whichever
  // arrives first wins.
  let started = false
  const start = () => {
    if (started) return
    started = true
    import('./boot').then((m) => m.default())
  }
  requestAnimationFrame(start)
  setTimeout(start, 600)
}
