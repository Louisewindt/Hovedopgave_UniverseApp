function updateValue(slider) {
  const valueSpan = slider.parentElement.querySelector('.height__value');
  valueSpan.textContent = slider.value;

  const min = slider.min;
  const max = slider.max;
  const val = slider.value;

  const percent = ((val - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent}%, var(--color-secondary) ${percent}%, var(--color-secondary) 100%)`;
}

function addSlider() {
  const container = document.getElementById('height-sliders');
  const totalSliders = container.querySelectorAll('.height__slider').length;
  const nextChildNumber = totalSliders + 1;

  const newSlider = document.createElement('section');
  newSlider.className = 'height__slider';
  newSlider.innerHTML = `
    <label>Barn ${nextChildNumber}: <span class="height__value">60</span> cm</label>
    <button class="height__delete" onclick="removeSlider(this)">
      <img src="images/icon_delete.svg" alt="Slet barn" class="height__delete-icon">
    </button>
    <input type="range" min="60" max="210" value="60" class="height__range" oninput="updateValue(this)">
  `;

  container.appendChild(newSlider);
  updateAddButtonText();

  // Optional scroll to bottom when added
  newSlider.scrollIntoView({ behavior: 'smooth' });
}

function removeSlider(button) {
  const slider = button.closest('.height__slider');
  if (slider) {
    slider.remove();
    updateAddButtonText();
    renumberChildren();
  }
}

function updateAddButtonText() {
  const addBtn = document.querySelector('.height__add');
  const totalSliders = document.querySelectorAll('.height__slider').length;

  addBtn.innerHTML = `
    <img src="images/icon_plus.svg" alt="" class="button__icon">
    ${totalSliders === 0 ? 'Tilføj barn' : 'Tilføj flere'}
  `;
}

// Renumber the children so they’re always 1, 2, 3...
function renumberChildren() {
  const sliders = document.querySelectorAll('.height__slider');
  sliders.forEach((slider, index) => {
    const label = slider.querySelector('label');
    if (label) {
      label.innerHTML = `Barn ${index + 1}: <span class="height__value">${slider.querySelector('.height__range').value}</span> cm`;
    }
  });
}
