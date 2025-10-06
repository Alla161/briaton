export const openMenu = () => {
  const catalogBtn = document.querySelector(".header__catalog-btn");
  const mainMenu = document.querySelector(".main-menu");

  catalogBtn.addEventListener("click", function () {
    mainMenu.classList.toggle("main-menu--active");
  });

  const closeBtn = mainMenu.querySelector(".main-menu__close");
  closeBtn.addEventListener("click", function () {
    mainMenu.classList.remove("main-menu--active");
  });
};
