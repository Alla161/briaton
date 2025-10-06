import { createCard } from "./card.js";
import { basketData } from "./basketData.js";

export const initSlider = (data) => {
  const sliderCatalog = document.querySelector(".day-products");
  const sliderList = document.querySelector(".day-products__list");
  const sliderProducts = document.querySelector(".day-products__slider");
  const goodsOfDayProducts = data.filter((iten) => iten.goodsOfDay);

  if (!goodsOfDayProducts.length) {
    sliderCatalog.remove();
  }

  sliderList.innerHTML = "";

  goodsOfDayProducts.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("day-products__item", "swiper-slide");
    const card = createCard(item, "product-card--small");
    li.innerHTML = card;
    sliderList.append(li);
    li.querySelector(".product-card__link--add").addEventListener(
      "click",
      (evt) => {
        evt.preventDefault();
        basketData(item);
      }
    );
  });

  const createSlider = () => {
    return new Swiper(sliderProducts, {
      navigation: {
        nextEl: ".day-products__navigation-btn--next",
        prevEl: ".day-products__navigation-btn--prev",
      },
      spaceBetween: 20,
      slidesPerView: 4,
    });
  };
  createSlider();
};
