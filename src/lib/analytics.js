import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from '../data/constants';

const SKIP_PATH_PREFIXES = ['/internal/', '/owner'];

function shouldTrack(pathname = '') {
  if (!GA_MEASUREMENT_ID) return false;
  return !SKIP_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/** Fallback if index.html tag is missing (e.g. alternate builds). */
export function initGa4() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(pathname, title = document.title) {
  if (!shouldTrack(pathname) || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pathname,
    page_title: title,
    page_location: `${window.location.origin}${pathname}`,
  });
}

export function trackGenerateLead(params = {}) {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'generate_lead', params);
}

/** Heatmaps + session recordings (Microsoft Clarity). */
export function initClarity() {
  if (!CLARITY_PROJECT_ID || typeof window === 'undefined' || window.clarity) return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
}

export function clarityEvent(name, value) {
  if (!window.clarity || !CLARITY_PROJECT_ID) return;
  window.clarity('event', name, value);
}
