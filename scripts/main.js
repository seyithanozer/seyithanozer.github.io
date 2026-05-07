window.onload = () => {
  const line = document.getElementById('reading-line');
  if (!line) return;
  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (100 * top / bottom).toFixed(1);
    line.style.setProperty('--scroll', `${pct}%`);
  });
};