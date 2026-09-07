/* Consent, and the analytics it gates.
 *
 * The site sets no advertising or tracking cookies at all. The only
 * measurement is Vercel Web Analytics, which is anonymous and cookieless:
 * no cross site identifier, no profile, no third party sale. It is still
 * put behind a real choice here rather than loaded silently, and the
 * choice is what actually decides whether the script is ever fetched.
 *
 * The answer is kept in localStorage, not a cookie, so declining leaves
 * nothing behind that could identify anyone.
 */
(function () {
  'use strict'

  var KEY = 'f34r.consent.v1'
  var stored

  try { stored = localStorage.getItem(KEY) } catch (e) { stored = null }

  function loadAnalytics() {
    add('va-script', '/_vercel/insights/script.js')
    add('si-script', '/_vercel/speed-insights/script.js')
  }

  function add(id, src) {
    if (document.getElementById(id)) return
    var s = document.createElement('script')
    s.id = id
    s.defer = true
    s.src = src
    document.head.appendChild(s)
  }

  function remember(v) {
    try { localStorage.setItem(KEY, v) } catch (e) {}
  }

  if (stored === 'granted') { loadAnalytics(); return }
  if (stored === 'denied') return

  // Global Privacy Control is a stated preference. Honour it without asking.
  if (navigator.globalPrivacyControl) { remember('denied'); return }

  var el = document.createElement('aside')
  el.className = 'consent'
  el.setAttribute('role', 'dialog')
  el.setAttribute('aria-modal', 'false')
  el.setAttribute('aria-labelledby', 'consentTitle')
  el.innerHTML =
    '<h2 id="consentTitle">Analytics</h2>' +
    '<p>This site sets no tracking or advertising cookies. I would like to count ' +
    'anonymous page views so I know which builds people actually look at. ' +
    'Nothing personal is collected either way. ' +
    '<a href="/privacy">Privacy policy</a></p>' +
    '<div class="consent-row">' +
    '<button type="button" data-act="decline">Decline</button>' +
    '<button type="button" data-act="accept">Allow</button>' +
    '</div>'

  document.body.appendChild(el)
  requestAnimationFrame(function () { el.classList.add('is-on') })

  el.addEventListener('click', function (e) {
    var act = e.target.getAttribute && e.target.getAttribute('data-act')
    if (!act) return
    remember(act === 'accept' ? 'granted' : 'denied')
    if (act === 'accept') loadAnalytics()
    el.classList.remove('is-on')
    setTimeout(function () { el.remove() }, 450)
  })

  // Escape declines, so the banner is never a trap for keyboard users.
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      remember('denied')
      el.classList.remove('is-on')
      setTimeout(function () { el.remove() }, 450)
    }
  })
})()
