let childCount = 1;

function updateValue(slider) {
  const valueSpan = slider.parentElement.querySelector('.height__value');
  valueSpan.textContent = slider.value;

  const min = slider.min;
  const max = slider.max;
  const val = slider.value;

  const percent = ((val - min) / (max - min)) * 100;

  // This is where the gradient magic happens
  slider.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent}%, var(--color-secondary) ${percent}%, var(--color-secondary) 100%)`;
}


function addSlider() {
  childCount++;
  const container = document.getElementById('height-sliders');

  const newSlider = document.createElement('section');
  newSlider.className = 'height__slider';
  newSlider.innerHTML = `
  <label>Barn ${childCount}: <span class="height__value">90</span> cm</label>
  <button class="height__delete" onclick="removeSlider(this)">
    <img src="images/icon_delete.svg" alt="Slet barn" class="height__delete-icon">
  </button>
  <input type="range" min="60" max="170" value="90" class="height__range" oninput="updateValue(this)">
`;

  container.appendChild(newSlider);

  updateAddButtonText();
}

function removeSlider(button) {
  const slider = button.closest('.height__slider');
  if (slider) {
    slider.remove();
    childCount--;
    updateAddButtonText();
  }
}

function updateAddButtonText() {
    const addBtn = document.querySelector('.height__add');
    const totalSliders = document.querySelectorAll('.height__slider').length;
  
    addBtn.innerHTML = `<img src="images/icon_plus.svg" alt="" class="button__icon">
     ${totalSliders === 0 ? 'Tilføj barn' : 'Tilføj flere'}`;
  }
  
