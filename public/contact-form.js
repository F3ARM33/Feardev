/* Contact form: validation on the way out, spam gates on the way in.
 *
 * The form posts to /api/contact, which re-checks everything here. Client
 * validation is for the person filling it in; the server's copy is the one
 * that is actually trusted.
 */
(function () {
  'use strict'

  var form = document.getElementById('contactForm')
  if (!form) return

  var status = document.getElementById('cformStatus')
  var button = form.querySelector('.cform-send')
  var label = form.querySelector('.cform-send-label')
  var opened = Date.now()

  var RULES = {
    name: function (v) {
      if (v.length < 2) return 'Please give me a name to call you by.'
    },
    contact: function (v) {
      if (v.length < 3) return 'I need a Discord tag or email to reply to.'
      if (v.indexOf('@') > -1 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return 'That email does not look right.'
    },
    message: function (v) {
      if (v.length < 20) return 'Tell me a little more, at least 20 characters.'
    },
  }

  function show(name, msg) {
    var input = form.elements[name]
    var slot = document.getElementById('err-' + name)
    if (!input || !slot) return
    slot.textContent = msg || ''
    input.setAttribute('aria-invalid', msg ? 'true' : 'false')
    if (msg) input.setAttribute('aria-describedby', 'err-' + name)
    else input.removeAttribute('aria-describedby')
    input.classList.toggle('is-bad', !!msg)
  }

  function check(name) {
    var input = form.elements[name]
    if (!input) return true
    var msg = RULES[name](input.value.trim())
    show(name, msg)
    return !msg
  }

  // Validate on blur, then live once a field has already been marked bad,
  // so nobody is corrected mid-word the first time through.
  Object.keys(RULES).forEach(function (name) {
    var input = form.elements[name]
    if (!input) return
    input.addEventListener('blur', function () { check(name) })
    input.addEventListener('input', function () {
      if (input.classList.contains('is-bad')) check(name)
    })
  })

  function setBusy(on, text) {
    button.disabled = on
    label.textContent = text || 'Send it'
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    status.textContent = ''
    status.className = 'cform-status'

    var names = Object.keys(RULES)
    var bad = names.filter(function (n) { return !check(n) })
    if (bad.length) {
      var first = form.elements[bad[0]]
      first.focus()
      status.className = 'cform-status is-bad'
      status.textContent = 'Please fix the highlighted ' + (bad.length > 1 ? 'fields.' : 'field.')
      return
    }

    setBusy(true, 'Sending')

    var data = {
      name: form.elements.name.value.trim(),
      contact: form.elements.contact.value.trim(),
      game: form.elements.game.value.trim(),
      message: form.elements.message.value.trim(),
      website: form.elements.website.value,
      elapsed: Date.now() - opened,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(function (r) {
        return r.json().catch(function () { return {} }).then(function (j) {
          return { ok: r.ok, status: r.status, body: j }
        })
      })
      .then(function (r) {
        if (r.ok && r.body.ok) {
          form.reset()
          setBusy(false, 'Sent')
          status.className = 'cform-status is-good'
          status.textContent = 'Got it. I usually reply within a day.'
          return
        }
        setBusy(false)
        if (r.status === 422 && r.body.errors) {
          Object.keys(r.body.errors).forEach(function (k) { show(k, r.body.errors[k]) })
          status.className = 'cform-status is-bad'
          status.textContent = 'Please fix the highlighted fields.'
          return
        }
        status.className = 'cform-status is-bad'
        status.textContent = r.body.error || 'Something went wrong. Please reach me on Discord.'
      })
      .catch(function () {
        setBusy(false)
        status.className = 'cform-status is-bad'
        status.textContent = 'Network error. Please reach me on Discord.'
      })
  })
})()
