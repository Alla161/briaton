import { createCard } from "./card.js";
import { sortCatalog } from "./sortProducts.js";
import { sortData } from "./sortData.js";
import { filterData } from "./filter.js";
import { basketData } from "./basketData.js";

const catalogList = document.querySelector(".catalog__list");
const catalogSelect = document.querySelector(".catalog__sort-select");
const catalogForm = document.querySelector(".catalog-form");

export const renderCatalogList = (data) => {
  catalogList.innerHTML = "";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("catalog__item");
    const card = createCard(item);
    li.innerHTML = card;
    catalogList.append(li);
    li.querySelector(".product-card__link--add").addEventListener(
      "click",
      (evt) => {
        evt.preventDefault();
        basketData(item);
      }
    );
  });
};

export const renderCatalog = (data) => {
  sortCatalog(data);

  const filterListBlockData = data.filter(filterData).sort(sortData);

  renderCatalogList(filterListBlockData);
  catalogSelect.addEventListener("change", function () {
    const filterListData = data.filter(filterData).sort(sortData);
    renderCatalogList(filterListData);
  });

  catalogForm.addEventListener("reset", function () {
    setTimeout(() => {
      const filterListData = data.filter(filterData).sort(sortData);
      renderCatalogList(filterListData);
    });
  });

  catalogForm.addEventListener("input", function () {
    const filterListData = data.filter(filterData).sort(sortData);
    renderCatalogList(filterListData);
  });
};
