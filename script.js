document.addEventListener("DOMContentLoaded", function () {
  // 1. Greeting Button Feature
  const greetBtn = document.getElementById("greetBtn");
  const greetMessage = document.getElementById("greetMessage");

  if (greetBtn && greetMessage) {
    greetBtn.addEventListener("click", function () {
      const hour = new Date().getHours();
      let greeting = "Hello";

      if (hour < 12) {
        greeting = "Good morning";
      } else if (hour < 18) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }

      greetMessage.textContent = `${greeting}! Welcome to my portfolio. Thanks for visiting.`;
      greetMessage.hidden = false;
    });
  }

  // 2. Show/Hide Details Feature
  const toggleButtons = document.querySelectorAll(".toggle-details");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const details = document.getElementById(targetId);

      if (details) {
        const isHidden = details.hidden;
        details.hidden = !isHidden;
        button.textContent = isHidden ? "Hide Details" : "Show Details";
        button.setAttribute("aria-expanded", !isHidden);
      }
    });
  });
});