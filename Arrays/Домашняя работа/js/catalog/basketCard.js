export const basketCard = (data) => {
  return `
<div class="basket__img">
                  <img src="${
                    data.image
                  }" alt="Фотография товара" height="60" width="60">
                </div>
                <span class="basket__name">${data.name}</span>
                <span class="basket__price">${data.price.new.toLocaleString()}</span>
                <button class="basket__close" type="button">
                  <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                    <use xlink:href="images/sprite.svg#icon-close"></use>
                  </svg>
                </button>
`;
};
