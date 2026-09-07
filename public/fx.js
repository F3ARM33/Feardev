/* Kill switches for the three visual layers added on top of the original
 * site, so a problem can be isolated on a real device in seconds instead of
 * guessed at.
 *
 *   ?fx=off      turn all three off
 *   ?fx=noglass  only the floating glass pill off  (liquid-glass-js)
 *   ?fx=nowebgl  only the hero and contact shaders off  (three.js)
 *   ?fx=nomesh   only the CSS landing gradient off
 *
 * The choice sticks for the tab, so it survives scrolling and reloads while
 * testing. Clear it with ?fx=on.
 *
 * This runs before everything else, which is why it is a plain blocking
 * script in the head rather than a deferred one.
 */
(function () {
  'use strict'
  var KEY = 'f34r.fx'
  var q = new URLSearchParams(location.search).get('fx')
  if (q) {
    try { q === 'on' ? sessionStorage.removeItem(KEY) : sessionStorage.setItem(KEY, q) } catch (e) {}
  }
  var mode = q
  if (!mode) { try { mode = sessionStorage.getItem(KEY) } catch (e) { mode = null } }
  if (!mode || mode === 'on') return

  var off = { glass: false, webgl: false, mesh: false }
  if (mode === 'off') off = { glass: true, webgl: true, mesh: true }
  else if (mode === 'noglass') off.glass = true
  else if (mode === 'nowebgl') off.webgl = true
  else if (mode === 'nomesh') off.mesh = true

  window.__f34rFx = off
  var de = document.documentElement
  if (off.glass) de.classList.add('fx-no-glass')
  if (off.webgl) de.classList.add('fx-no-webgl')
  if (off.mesh) de.classList.add('fx-no-mesh')
  console.log('[f34r] effects disabled:', off)
})()
