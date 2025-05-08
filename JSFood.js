document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.food-options__item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const isSelected = item.classList.contains('food-options__item--selected');
  
        if (isSelected) {
          // Deselect this item
          item.classList.remove('food-options__item--selected');
        } else {
          // Select this item
          item.classList.add('food-options__item--selected');
        }
  
        // Update all items' faded state
        const anySelected = document.querySelectorAll('.food-options__item--selected').length > 0;
  
        items.forEach(otherItem => {
          if (!otherItem.classList.contains('food-options__item--selected')) {
            if (anySelected) {
              otherItem.classList.add('food-options__item--faded');
            } else {
              otherItem.classList.remove('food-options__item--faded');
            }
          } else {
            otherItem.classList.remove('food-options__item--faded');
          }
        });
      });
    });
  });
  