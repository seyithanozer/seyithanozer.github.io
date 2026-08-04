// Google Analytics — loaded only after consent
function loadAnalytics() {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q2TJJ5ZTXG';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-Q2TJJ5ZTXG');
}

// Cookie consent banner
document.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  var consent = localStorage.getItem('cookie-consent');
  if (consent === 'accepted') {
    loadAnalytics();
  } else if (!consent) {
    banner.classList.add('is-visible');
  }

  window.acceptCookies = function () {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.classList.remove('is-visible');
    loadAnalytics();
  };

  window.declineCookies = function () {
    localStorage.setItem('cookie-consent', 'declined');
    banner.classList.remove('is-visible');
  };
});
