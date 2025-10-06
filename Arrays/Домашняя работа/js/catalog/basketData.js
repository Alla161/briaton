import { basketCard } from "./basketCard.js";

const basketList = document.querySelector(".basket__list");
const basketCount = document.querySelector(".header__user-count");
const emptyBlock = document.querySelector(".basket__empty-block");

const updateEmpty = () => {
  if (counter) {
    emptyBlock.style.display = "none";
  } else {
    emptyBlock.style.display = "block";
  }
};

let counter = 0;

export const basketData = (data) => {
  updateEmpty();
  const item = document.createElement("li");
  counter += 1;
  basketCount.textContent = counter;
  item.classList.add("basket__item");

  const template = basketCard(data);
  item.innerHTML = template;
  basketList.append(item);

  item.querySelector(".basket__close").addEventListener("click", () => {
    item.remove();
    counter -= 1;
    basketCount.textContent = counter;
    updateEmpty();
  });
};
