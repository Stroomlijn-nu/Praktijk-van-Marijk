/*
 * cookie-consent.js · Praktijk van Marijk
 * Eén cookiemelding voor de hoofdsite (React) en de losse HTML-pagina's.
 *
 * Werking
 * - Google Analytics (GA4) laadt pas na toestemming. Zonder toestemming wordt er niets van Google geladen.
 * - De keuze wordt 12 maanden bewaard in localStorage ('cookie_consent'), gedeeld door alle pagina's.
 * - Via window.pvmCookies.open() kan de bezoeker de keuze altijd wijzigen (link "Cookie-instellingen").
 * - Intrekken van toestemming verwijdert de GA-cookies en herlaadt de pagina.
 *
 * Plaatsen: <script src="/cookie-consent.js" defer></script> vlak voor </body>.
 */
(function () {
  'use strict';

  var GA_ID = 'G-TK9PF14T2J';
  var KEY = 'cookie_consent';
  var EXPIRY_DAYS = 365;
  var PRIVACY_URL = '/#privacy';

  var gaLoaded = false;
  var pageviews = 0;

  // ── Opslag ─────────────────────────────────────────────────────────────
  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || !data.expires || new Date(data.expires) <= new Date()) return null;
      return data.prefs || null;
    } catch (e) { return null; }
  }

  function write(prefs) {
    try {
      var expires = new Date();
      expires.setDate(expires.getDate() + EXPIRY_DAYS);
      localStorage.setItem(KEY, JSON.stringify({ prefs: prefs, expires: expires.toISOString(), v: 2 }));
    } catch (e) { /* opslag geblokkeerd: melding verschijnt bij volgend bezoek opnieuw */ }
  }

  // ── Google Analytics ───────────────────────────────────────────────────
  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    pageviews = 1; // config stuurt de eerste paginaweergave zelf
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function deleteGACookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid' || name === '_gat') {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
        });
      }
    });
  }

  // Voor de React-site: extra paginaweergave bij wisselen van pagina (hash-routing)
  window.pvmTrackPage = function () {
    if (!gaLoaded || typeof window.gtag !== 'function') return;
    pageviews += 1;
    if (pageviews === 1) return;
    window.gtag('event', 'page_view', {
      page_location: location.href,
      page_title: document.title
    });
  };

  // ── Melding ────────────────────────────────────────────────────────────
  var css = [
    '#pvm-cc{position:fixed;left:16px;bottom:16px;z-index:9999;max-width:420px;width:calc(100% - 32px);',
    'background:#faf8f4;border:0.5px solid #e0d8cc;border-top:3px solid #89221d;border-radius:6px;',
    'box-shadow:0 6px 28px rgba(46,31,14,.16);padding:20px 22px;font-family:"DM Sans",system-ui,sans-serif;color:#2e1f0e;',
    'box-sizing:border-box;animation:pvmccIn .25s ease-out}',
    '@keyframes pvmccIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}',
    '#pvm-cc h2{font-family:Lora,Georgia,serif;font-weight:500;font-size:18px;line-height:1.3;margin:0 0 8px}',
    '#pvm-cc p{font-size:14px;line-height:1.6;color:#5a4a38;margin:0 0 14px}',
    '#pvm-cc a{color:#89221d;text-decoration:underline;text-underline-offset:3px}',
    '#pvm-cc .pvm-cc-row{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:9px 0;border-top:0.5px solid #e0d8cc;font-size:13px}',
    '#pvm-cc .pvm-cc-row:last-of-type{border-bottom:0.5px solid #e0d8cc;margin-bottom:14px}',
    '#pvm-cc .pvm-cc-row strong{display:block;font-weight:500;color:#2e1f0e;font-size:14px}',
    '#pvm-cc .pvm-cc-row span{color:#8a7a68}',
    '#pvm-cc input{width:18px;height:18px;accent-color:#89221d;flex-shrink:0;cursor:pointer}',
    '#pvm-cc input:disabled{cursor:not-allowed}',
    '#pvm-cc .pvm-cc-btns{display:flex;gap:10px}',
    '#pvm-cc button{flex:1;padding:10px 12px;border-radius:4px;border:1px solid #89221d;font:500 13px/1.2 "DM Sans",system-ui,sans-serif;letter-spacing:.02em;cursor:pointer}',
    '#pvm-cc .pvm-cc-no{background:transparent;color:#89221d}',
    '#pvm-cc .pvm-cc-yes{background:#89221d;color:#faf8f4}',
    '#pvm-cc button:focus-visible,#pvm-cc input:focus-visible{outline:2px solid #cf872d;outline-offset:2px}',
    '@media print{#pvm-cc{display:none}}'
  ].join('');

  function close() {
    var el = document.getElementById('pvm-cc');
    if (el) el.remove();
  }

  function apply(prefs) {
    var before = read();
    write(prefs);
    close();
    if (prefs.analytics) {
      loadGA();
    } else if (before && before.analytics) {
      // Toestemming ingetrokken: cookies weg en schoon herladen
      if (typeof window.gtag === 'function') window.gtag('consent', 'update', { analytics_storage: 'denied' });
      deleteGACookies();
      location.reload();
    }
  }

  function open() {
    if (document.getElementById('pvm-cc')) return;
    if (!document.getElementById('pvm-cc-style')) {
      var st = document.createElement('style');
      st.id = 'pvm-cc-style';
      st.textContent = css;
      document.head.appendChild(st);
    }
    var current = read();
    var box = document.createElement('div');
    box.id = 'pvm-cc';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Cookie-instellingen');
    box.innerHTML =
      '<h2>Cookies</h2>' +
      '<p>Deze website gebruikt alleen wat nodig is om goed te werken. Met jouw toestemming meet ik ook ' +
      'het websitebezoek via Google Analytics. Zo zie ik welke informatie professionals zoeken. ' +
      '<a href="' + PRIVACY_URL + '">Privacybeleid</a></p>' +
      (current ?
        '<label class="pvm-cc-row"><span><strong>Noodzakelijk</strong>Altijd actief</span><input type="checkbox" checked disabled></label>' +
        '<label class="pvm-cc-row"><span><strong>Statistieken</strong>Google Analytics</span><input type="checkbox" id="pvm-cc-an"' + (current.analytics ? ' checked' : '') + '></label>'
        : '') +
      '<div class="pvm-cc-btns">' +
        '<button type="button" class="pvm-cc-no">Alleen noodzakelijk</button>' +
        '<button type="button" class="pvm-cc-yes">' + (current ? 'Keuze opslaan' : 'Accepteren') + '</button>' +
      '</div>';
    document.body.appendChild(box);

    box.querySelector('.pvm-cc-no').addEventListener('click', function () {
      apply({ essential: true, analytics: false });
    });
    box.querySelector('.pvm-cc-yes').addEventListener('click', function () {
      var cb = document.getElementById('pvm-cc-an');
      apply({ essential: true, analytics: cb ? cb.checked : true });
    });
  }

  window.pvmCookies = { open: open, get: read };

  // ── Start ──────────────────────────────────────────────────────────────
  function init() {
    var prefs = read();
    if (!prefs) open();
    else if (prefs.analytics) loadGA();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
