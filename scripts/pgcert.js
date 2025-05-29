// Wait for DOM content to load // PGCERT
document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.pgcert-grid-item');
  const overlays = document.querySelectorAll('.overlay');

  labels.forEach(label => {
    label.addEventListener('click', () => {
      // Remove "checked" attribute from all checkboxes and hide overlays
      document.querySelectorAll('.popup-toggle').forEach(input => {
        input.checked = false;
      });
      overlays.forEach(overlay => {
        overlay.style.display = 'none';
      });
      labels.forEach(l => l.classList.remove('active'));

      // Find checkbox input linked by "for" attribute of label
      const popupId = label.getAttribute('for');
      const checkbox = document.getElementById(popupId);
      const overlay = document.getElementById('content' + popupId.replace('popup', ''));

      if (checkbox && overlay) {
        // Mark checkbox as checked (for accessibility if needed)
        checkbox.checked = true;

        // Show the correct overlay
        overlay.style.display = 'flex';

        // Highlight the clicked label
        label.classList.add('active');
      }
    });
  });

  // Also add listeners on close buttons inside overlays to hide them
  document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      // Uncheck all checkboxes and hide overlays and remove highlights
      document.querySelectorAll('.popup-toggle').forEach(input => {
        input.checked = false;
      });
      overlays.forEach(overlay => {
        overlay.style.display = 'none';
      });
      labels.forEach(l => l.classList.remove('active'));
    });
  });
});

// PGCERT