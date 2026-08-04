// Wait for DOM content to load // resource
document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.resource-grid-item');
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

// resource

// Mobile sidenotes — collect and append at end of page
document.addEventListener('DOMContentLoaded', function () {
  var notes = document.querySelectorAll('.sidenote');
  if (!notes.length) return;

  var aside = document.createElement('aside');
  aside.className = 'mobile-sidenotes';

  var heading = document.createElement('p');
  heading.className = 'section-label';
  heading.textContent = 'Notes';
  aside.appendChild(heading);

  var ol = document.createElement('ol');
  ol.className = 'mobile-sidenotes__list';

  notes.forEach(function (note) {
    var li = document.createElement('li');
    li.innerHTML = note.innerHTML;
    ol.appendChild(li);
  });

  aside.appendChild(ol);

  var main = document.querySelector('main');
  if (main) main.appendChild(aside);
});