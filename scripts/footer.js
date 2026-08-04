// Global footer — injected on every page
document.addEventListener('DOMContentLoaded', function () {
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<p class="meta">This page emits ' +
    '<a href="https://digitalbeacon.co/report/seyithanozer-com">' +
    '0.068\u00a0g of CO\u2082 per visit' +
    '<span class="arr" aria-hidden="true">&#8599;&#xfe0e;</span>' +
    '</a>.</p>';
  document.body.appendChild(footer);
});
