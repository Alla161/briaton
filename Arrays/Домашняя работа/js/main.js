import { openMenu } from "./components/menu.js";
import { openCity } from "./components/openCity.js";
import { accordOftenAsk } from "./components/accordOftenAsk.js";
import { formValidate } from "./components/just-validate.js";
import { initCatalog } from "./catalog/catalog.js";
import { basketBlock } from "./components/basketBox.js";

window.addEventListener("DOMContentLoaded", () => {
  openMenu();
  openCity();
  accordOftenAsk();
  initCatalog();
  basketBlock();
  formValidate();
});
