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

/* ── CONFIGURATOR (Trailers page) ── */
const configState = { trim: 'Standard', color: 'Black', colorHex: '#1a1a1a', addons: {} };
const addonNames = {
  modular: 'Modular storage',
  solar:   'Power & solar',
  water:   'Water system',
  kitchen: 'Kitchenette',
  aircomp: 'Air compressor',
  awning:  'Awning',
  wheels:  'Wheel & tire pkg',
  rack:    'Bike/gear rack'
};

function selectTrim(id, name) {
  configState.trim = name;
  document.querySelectorAll('.trim-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById('trim-' + id);
  if (card) card.classList.add('selected');
  updateSummary();
}

function selectColor(name, hex) {
  configState.color = name;
  configState.colorHex = hex;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  const sw = document.getElementById('swatch-' + name);
  if (sw) sw.classList.add('active');
  const label = document.getElementById('color-label');
  if (label) label.textContent = name;
  // Update all trim card previews
  document.querySelectorAll('.trim-preview').forEach(p => p.style.background = hex);
  updateSummary();
}

function toggleAddon(id) {
  configState.addons[id] = !configState.addons[id];
  const chk = document.getElementById('addon-' + id);
  if (!chk) return;
  if (configState.addons[id]) {
    chk.classList.add('checked');
    chk.innerHTML = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else {
    chk.classList.remove('checked');
    chk.innerHTML = '';
  }
  updateSummary();
}

function updateSummary() {
  const selected = Object.keys(configState.addons)
    .filter(k => configState.addons[k])
    .map(k => addonNames[k]);
  const addonsText = selected.length ? selected.join(', ') : 'No add-ons';
  const full = configState.trim + ' — ' + configState.color + ' — ' + addonsText;

  const summaryEl = document.getElementById('selection-summary');
  if (summaryEl) summaryEl.textContent = full;

  // Sync to quote form hidden fields
  const qTrim   = document.getElementById('q-trim');
  const qColor  = document.getElementById('q-color');
  const qAddons = document.getElementById('q-addons');
  if (qTrim)   qTrim.value   = configState.trim;
  if (qColor)  qColor.value  = configState.color;
  if (qAddons) qAddons.value = selected.length ? selected.join(', ') : 'None';

  const qSummary = document.getElementById('quote-build-summary');
  if (qSummary) qSummary.textContent = configState.trim + ' trim · ' + configState.color + (selected.length ? ' · Add-ons: ' + selected.join(', ') : ' · No add-ons selected');
}

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
          else { form.innerHTML = '<div class="form-success" style="display:block;"><p>✓ Message sent — Tyler and Kristen will be in touch within 2 business days.</p></div>'; }
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
