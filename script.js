const list = document.querySelector('.shows__list');
const btnLeft = document.querySelector('.shows__arrow--left');
const btnRight = document.querySelector('.shows__arrow--right');

const item = list.querySelector('.shows__item');
const gap = parseInt(getComputedStyle(list).gap) || 12;
const scrollAmount = item.offsetWidth + gap; // scroll 1 item + gap

btnLeft.addEventListener('click', () => {
  list.scrollBy({ left: -(scrollAmount * 3), behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  list.scrollBy({ left: scrollAmount * 3, behavior: 'smooth' });
});