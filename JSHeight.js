// Opdaterer tekstværdien og baggrundsfarven på slideren, mens brugeren trækker
function updateValue(slider) {
  // Finder elementet der viser den aktuelle værdi (cm)
  const valueSpan = slider.parentElement.querySelector('.height__value');
  // Opdaterer tekstindholdet til at matche sliderens værdi
  valueSpan.textContent = slider.value;

  // Gemmer minimum, maksimum og aktuel værdi fra slideren
  const min = slider.min;
  const max = slider.max;
  const val = slider.value;

  // Udregner hvor langt slideren er trukket i procent
  const percent = ((val - min) / (max - min)) * 100;
  
  // Opdaterer sliderens baggrundsfarve med en gradient, så det passer til hvor langt den er trukket
  slider.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percent}%, var(--color-secondary) ${percent}%, var(--color-secondary) 100%)`;
}

// Tilføjer en ny slider til siden, så man kan angive højde på endnu et barn
function addSlider() {
  // Finder containeren der indeholder alle højdeslidere
  const container = document.getElementById('height-sliders');
  
  // Finder ud af hvor mange slidere der allerede er
  const totalSliders = container.querySelectorAll('.height__slider').length;

  // Beregner hvilket nummer det nye barn skal have
  const nextChildNumber = totalSliders + 1;

  // Opretter nyt section-element med HTML til label, knap og slider
  const newSlider = document.createElement('section');
  newSlider.className = 'height__slider';
  newSlider.innerHTML = `
    <label>Barn ${nextChildNumber}: <span class="height__value">60</span> cm</label>
    <button class="height__delete" onclick="removeSlider(this)">
      <img src="images/icon_delete.svg" alt="Slet barn" class="height__delete-icon">
    </button>
    <input type="range" min="60" max="210" value="60" class="height__range" oninput="updateValue(this)">
  `;

  // Tilføjer den nye slider til containeren
  container.appendChild(newSlider);

  // Opdaterer teksten på tilføj-knappen (f.eks. "Tilføj flere")
  updateAddButtonText();

  // Scroller ned til det nye element, så brugeren ser at det er tilføjet
  newSlider.scrollIntoView({ behavior: 'smooth' });
}

// Fjerner en bestemt slider fra siden, f.eks. hvis brugeren fortryder
function removeSlider(button) {
  // Finder det nærmeste parent-element med klassen .height__slider
  const slider = button.closest('.height__slider');
  
  // Hvis det findes, fjernes det helt fra DOM'en
  if (slider) {
    slider.remove();
    
    // Opdaterer knaptekst og nummerering efter sletning
    updateAddButtonText();
    renumberChildren();
  }
}

// Ændrer teksten på "Tilføj"-knappen afhængigt af hvor mange børn der er tilføjet
function updateAddButtonText() {
  // Finder selve knappen
  const addBtn = document.querySelector('.height__add');

  // Tæller hvor mange slidere der er
  const totalSliders = document.querySelectorAll('.height__slider').length;

  // Opdaterer HTML-indholdet med enten "Tilføj barn" eller "Tilføj flere"
  addBtn.innerHTML = `
    <img src="images/icon_plus.svg" alt="" class="button__icon">
    ${totalSliders === 0 ? 'Tilføj barn' : 'Tilføj flere'}
  `;
}

// Opdaterer labelen på hver slider, så rækkefølgen altid er rigtig ("Barn 1", "Barn 2", osv.)
function renumberChildren() {
  // Finder alle slidere
  const sliders = document.querySelectorAll('.height__slider');

  // Går dem alle sammen igennem og ændrer teksten på deres label
  sliders.forEach((slider, index) => {
    const label = slider.querySelector('label');
    
    // Hvis der er en label, opdateres teksten med korrekt nummer og højdeværdi
    if (label) {
      label.innerHTML = `Barn ${index + 1}: <span class="height__value">${slider.querySelector('.height__range').value}</span> cm`;
    }
  });
}
