// One decision, shared by every WebGL layer on the page.
//
// The site's whole pitch is that it holds its frame rate, so nothing here is
// allowed to run unconditionally. A layer starts only if the device can
// clearly afford it, and every layer stops rendering the moment it scrolls
// out of view.

let cached = null

export function canRunWebGL() {
  if (cached !== null) return cached
  cached = (() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    // Low memory or few cores is the profile that actually struggles.
    if ((navigator.deviceMemory || 8) < 4) return false
    if ((navigator.hardwareConcurrency || 8) < 4) return false
    // Phones and tablets are excluded outright. The two layers cost about
    // 330kB of JavaScript on top of a page that is already image heavy, and
    // that is not a fair trade on mobile data for a background effect. The
    // CSS design underneath is the one small screens get, and it is complete.
    if (window.matchMedia('(max-width: 900px)').matches) return false
    if (window.matchMedia('(pointer: coarse)').matches) return false
    if (navigator.connection && navigator.connection.saveData) return false
    try {
      const c = document.createElement('canvas')
      const gl = c.getContext('webgl2') || c.getContext('webgl')
      if (!gl) return false
      // Software rasterisers report themselves. They will not hold 60fps.
      const dbg = gl.getExtension('WEBGL_debug_renderer_info')
      if (dbg) {
        const r = String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || '')
        if (/swiftshader|llvmpipe|software|basic render/i.test(r)) return false
      }
      return true
    } catch {
      return false
    }
  })()
  return cached
}

// Desktops only reach here, so this just trims retina overdraw.
export function pixelDensity() {
  const dpr = window.devicePixelRatio || 1
  const small = window.matchMedia('(max-width: 860px)').matches
  return Math.min(dpr, small ? 1 : 1.5)
}

// Renders only while the host element is on screen. Everything else pauses.
export function observeVisibility(el, onChange) {
  const io = new IntersectionObserver(
    ([e]) => onChange(e.isIntersecting),
    { rootMargin: '120px' }
  )
  io.observe(el)
  return () => io.disconnect()
}
