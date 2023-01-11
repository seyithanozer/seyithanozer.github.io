window.onload = () => {
    const readBarFill = document.getElementById('read-bar-fill');
    window.addEventListener('scroll', () => {
      const elem = document.documentElement, body = document.body;
      const scrollTop = elem.scrollTop  || body.scrollTop;
      const scrollBottom = (elem.scrollHeight  || body.scrollHeight) - window.innerHeight;
      readBarFill.style.width = `${100.0 * scrollTop / scrollBottom}%`;
    });
  };
