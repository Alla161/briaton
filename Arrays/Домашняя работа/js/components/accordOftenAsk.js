export const accordOftenAsk = () => {
  const accordionButtons = document.querySelectorAll(".accordion__btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeBtn = document.querySelector(".accordion__btn--active");
      if (activeBtn && activeBtn !== button) {
        activeBtn.classList.remove("accordion__btn--active");
        activeBtn.nextElementSibling.style.display = "none";
      }

      button.classList.toggle("accordion__btn--active");
      const content = button.nextElementSibling;
      if (button.classList.contains("accordion__btn--active")) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
};
