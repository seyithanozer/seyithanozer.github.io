// Panel switching — index.html only
function switchPanel(id) {
  document.querySelectorAll('.panel').forEach(function (p) {
    p.classList.remove('is-active');
  });
  document.querySelectorAll('.nav-btn[data-panel]').forEach(function (b) {
    b.classList.remove('is-active');
  });
  document.getElementById('panel-' + id).classList.add('is-active');
  document.querySelector('.nav-btn[data-panel="' + id + '"]').classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
