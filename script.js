const emailContainer = document.querySelector(".email-container");

const emailInput = document.querySelector(".email-input");

const emailContainerOverlay = window.getComputedStyle(
  emailContainer,
  "::before"
);

const defalutEmailContainerOverlay = emailContainerOverlay;

emailContainer.addEventListener("click", () => {
  emailInput.focus();
});

emailInput.addEventListener("focus", () => {
  emailContainer.style.setProperty("--beforeHeight", "70%");
  emailContainer.style.setProperty("--beforeFont", "1.2rem");
  emailContainer.style.border = "1px solid #fff";
});

emailInput.addEventListener("focusout", () => {
  emailContainer.style = defalutEmailContainerOverlay;
});
