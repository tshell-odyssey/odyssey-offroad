/* ============================================================
   ODYSSEY OFF-ROAD — Shared JavaScript
   odysseyoffroad.com
   ============================================================ */

/* ── MOBILE NAV ── */
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    const open = mobileNav.style.display === 'flex';
    mobileNav.style.display = open ? 'none' : 'flex';
  });
}

/* ── STAGE CARDS (Build Progress) ── */
function toggleStage(id) {
  const body = document.getElementById('stage-body-' + id);
  const chev = document.getElementById('chev-' + id);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (chev) chev.classList.toggle('open', !isOpen);
}

/* ── CONFIGURATOR — handled inline in trailers.html ── */

/* ── FIELD NOTES FILTER ── */
function filterPosts(cat, btn) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.post-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
}

/* ── CONTACT FORM CONDITIONAL FIELDS ── */
function updateContactContext(val) {
  document.querySelectorAll('.context-panel').forEach(p => p.classList.remove('active'));
  const submit = document.getElementById('contact-submit');
  if (val) {
    const panel = document.getElementById('ctx-' + val);
    if (panel) panel.classList.add('active');
    if (submit) submit.style.display = 'block';
  }
}

/* ── SCROLL TO QUOTE FORM ── */
function scrollToQuote() {
  const el = document.getElementById('quote-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── NETLIFY FORMS ENHANCEMENT ── */
function initForms() {
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const originalText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

      try {
        const data = new FormData(form);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(data).toString()
        });

        if (response.ok) {
          const successEl = form.querySelector('.form-success');
          if (successEl) { form.style.display = 'none'; successEl.style.display = 'block'; }
          else { form.innerHTML = '<div class="form-success" style="display:block;"><p>✓ Message sent — the Odyssey Team will be in touch within 2 business days.</p></div>'; }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (btn) { btn.disabled = false; btn.textContent = originalText; }
        alert('Something went wrong. Please try again or email us directly at tshell@odysseyoffroad.com');
      }
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initForms();
});
