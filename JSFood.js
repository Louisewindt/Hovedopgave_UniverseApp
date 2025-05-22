// Venter til hele HTML'en er indlæst, før koden kører
document.addEventListener('DOMContentLoaded', () => {
  // Finder alle mad-elementer med klassen .food-options__item
  const items = document.querySelectorAll('.food-options__item');

  // Går alle mad-elementer igennem
  items.forEach(item => {
    // Tilføjer klik-event til hvert element
    item.addEventListener('click', () => {

      // Tjekker om det valgte element allerede er markeret som valgt
      const isSelected = item.classList.contains('food-options__item--selected');

      if (isSelected) {
        // Hvis det allerede er valgt, fjernes markerings-klassen
        item.classList.remove('food-options__item--selected');
      } else {
        // Hvis det ikke er valgt, tilføjes markerings-klassen
        item.classList.add('food-options__item--selected');
      }

      // Tjekker om der er mindst ét element der er valgt
      const anySelected = document.querySelectorAll('.food-options__item--selected').length > 0;

      // Går igennem alle mad-elementer igen for at opdatere deres udseende
      items.forEach(otherItem => {
        // Hvis elementet ikke er valgt
        if (!otherItem.classList.contains('food-options__item--selected')) {
          if (anySelected) {
            // Hvis noget er valgt, gøres de andre grå og inaktive
            otherItem.classList.add('food-options__item--faded');
          } else {
            // Hvis intet er valgt, fjernes grå filter
            otherItem.classList.remove('food-options__item--faded');
          }
        } else {
          // Det valgte element skal aldrig være gråt
          otherItem.classList.remove('food-options__item--faded');
        }
      });
    });
  });
});
