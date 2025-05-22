// Gør det muligt at folde show-beskrivelsen ud og ind
document.querySelectorAll('.show__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    // Finder det show-element (boksen) som knappen hører til
    const showBox = toggle.closest('.show');

    // Tjekker om showet allerede er åbent (udfoldet)
    const isActive = showBox.classList.contains('show--expanded');

    // Finder tekst og ikon i toggle-knappen
    const toggleText = toggle.querySelector('.show__toggle-text');
    const toggleIcon = toggle.querySelector('.show__arrow');

    // Skifter teksten mellem "Læs mere" og "Læs mindre" afhængigt af om det er åbent
    toggleText.textContent = isActive ? 'Læs mere' : 'Læs mindre';

    // Drejer ikonet op eller ned 
    toggleIcon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';

    // Skifter CSS-klasser for at vise eller skjule hvid boks
    showBox.classList.toggle('show--expanded'); // viser/skjuler ekstra info
    showBox.classList.toggle('show--active');   // tilføjer ekstra margin til layout
  });
});

// Gør det muligt at "vælge" et show med et flueben
document.querySelectorAll('.show__checkbox').forEach(button => {
  button.addEventListener('click', () => {
    // Tjekker om der allerede er et flueben (img) inde i boksen
    const existingImg = button.querySelector('img');

    if (existingImg) {
      // Hvis der allerede er et ikon, fjernes det (man fravælger)
      button.removeChild(existingImg);
    } else {
      // Hvis der ikke er noget ikon, tilføjes det (man vælger)
      const img = document.createElement('img');
      img.src = 'images/icon_checked.svg'; // ikonet for valgt
      img.alt = 'Checked';
      button.appendChild(img);
    }
  });
});
