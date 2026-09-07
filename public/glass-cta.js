/* Floating "Start a project" dock.
 *
 * This is the site's one persistent call to action: it fades in once the hero
 * has been scrolled past, and follows the visitor down the page so the way to
 * hire is never more than one click away.
 *
 * Where the device can afford it, the pill is rendered with liquid-glass-js
 * (WebGL refraction). Everywhere else it falls back to a plain CSS pill. The
 * fallback is the default and the glass is the upgrade, so the call to action
 * exists even if WebGL, the vendor scripts, or html2canvas fail outright.
 */
(function () {
  'use strict'

  var DISCORD = 'https://discord.com/users/1088022144308486176'

  function capable() {
    // ?fx=noglass / ?fx=off, see fx.js
    if (window.__f34rFx && window.__f34rFx.glass) return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (window.matchMedia('(max-width: 860px)').matches) return false
    if ((navigator.deviceMemory || 8) < 4) return false
    if (typeof Button !== 'function' || typeof html2canvas !== 'function') return false
    try {
      var c = document.createElement('canvas')
      return !!(c.getContext('webgl2') || c.getContext('webgl'))
    } catch (e) {
      return false
    }
  }

  var dock = document.createElement('div')
  dock.className = 'dock'
  dock.setAttribute('data-glass', 'off')

  var link = document.createElement('a')
  link.className = 'dock-pill'
  link.href = DISCORD
  link.target = '_blank'
  link.rel = 'noreferrer'
  link.setAttribute('aria-label', 'Start a project on Discord')
  link.innerHTML =
    '<span class="dock-dot" aria-hidden="true"></span>' +
    '<span class="dock-label">Start a project</span>'
  dock.appendChild(link)
  document.body.appendChild(dock)

  /* Show the dock only after the hero is behind us. Before that the hero has
     its own call to action and a second one would just be noise. */
  var hero = document.querySelector('.hero') || document.querySelector('header')
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      function (entries) {
        dock.classList.toggle('is-on', !entries[0].isIntersecting)
      },
      { threshold: 0 }
    ).observe(hero)
  } else {
    dock.classList.add('is-on')
  }

  if (!capable()) return

  /* Upgrade to glass.
   *
   * liquid-glass-js refracts a single html2canvas snapshot of the page. It
   * does not re-capture as you scroll, and re-capturing on every scroll stop
   * would cost a long main thread task each time. The dock sits over the
   * page's near uniform dark background, where a stale snapshot is not
   * noticeable, so it is captured once and refreshed only on resize. */
  var glass
  try {
    glass = new Button({
      text: 'Start a project',
      size: 17,
      type: 'pill',
      tintOpacity: 0.12,
      onClick: function () {
        window.open(DISCORD, '_blank', 'noopener')
      },
    })
  } catch (e) {
    return /* keep the CSS fallback */
  }

  glass.element.setAttribute('role', 'link')
  glass.element.setAttribute('aria-label', 'Start a project on Discord')
  glass.element.setAttribute('tabindex', '0')
  glass.element.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      window.open(DISCORD, '_blank', 'noopener')
    }
  })

  dock.appendChild(glass.element)
  dock.setAttribute('data-glass', 'on')

  var t
  window.addEventListener(
    'resize',
    function () {
      clearTimeout(t)
      t = setTimeout(function () {
        try {
          if (window.Container) Container.pageSnapshot = null
          glass.capturePageSnapshot()
        } catch (e) {}
      }, 400)
    },
    { passive: true }
  )
})()
