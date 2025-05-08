function toggleShowDetails(button) {
    const details = button.closest(".show").querySelector(".show__details");
    details.classList.toggle("active");
  
    // Change the button text + arrow
    button.innerHTML = details.classList.contains("active")
      ? "Læs mindre <span class='arrow'>▲</span>"
      : "Læs mere <span class='arrow'>▼</span>";
  }
  