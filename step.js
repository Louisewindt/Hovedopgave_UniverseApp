  // Identify current step based on page
  let currentStep = 1;
  if (window.location.href.includes("food")) currentStep = 2;
  if (window.location.href.includes("shows")) currentStep = 3;

  // Highlight steps
  document.querySelectorAll(".step-indicator__step").forEach((stepEl) => {
    const stepNum = parseInt(stepEl.dataset.step);
    if (stepNum <= currentStep) {
      stepEl.classList.add("step-indicator__step--active");
    }
  });

  // Highlight connecting lines
  document.querySelectorAll(".step-indicator__line").forEach((lineEl) => {
    const id = lineEl.dataset.line;
    if ((currentStep === 1 && id === "1-2") ||
        (currentStep === 2 && id === "2-3")) {
      lineEl.classList.add("step-indicator__line--gradient");
    }
    if ((currentStep === 2 && id === "1-2") || 
        (currentStep === 3 && (id === "1-2" || id === "2-3"))) {
      lineEl.classList.add("step-indicator__line--active");
    }
  });