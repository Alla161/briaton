const basketBox = document.querySelector(".header__user-btn");
const basket = document.querySelector(".basket");

export const basketBlock = () => {
  basketBox.addEventListener("click", function () {
    basket.classList.toggle("basket--active");
  });
};
