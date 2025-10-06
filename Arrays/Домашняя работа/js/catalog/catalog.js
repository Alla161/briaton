import { initSlider } from "./swiper.js";
import { renderCatalog } from "./productsCard.js";

export const initCatalog = () => {
  fetch("./data/data.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      initSlider(data);
      renderCatalog(data);
    });
};
