document.querySelectorAll('.show__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const showBox = toggle.closest('.show');
    const isActive = showBox.classList.contains('show--expanded');

    // Toggle text and icon
    const toggleText = toggle.querySelector('.show__toggle-text');
    const toggleIcon = toggle.querySelector('.show__arrow');
    toggleText.textContent = isActive ? 'Læs mere' : 'Læs mindre';
    toggleIcon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';

    // Toggle class
    showBox.classList.toggle('show--expanded');
    showBox.classList.toggle('show--active'); // <-- margin trick 💅
  });
});


document.querySelectorAll('.show__checkbox').forEach(button => {
  button.addEventListener('click', () => {
    const existingImg = button.querySelector('img');

    if (existingImg) {
      button.removeChild(existingImg);
    } else {
      const img = document.createElement('img');
      img.src = 'images/icon_checked.svg'; // adjust path if needed
      img.alt = 'Checked';
      button.appendChild(img);
    }
  });
});
