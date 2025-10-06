const countPendan = document.querySelector(
  ".custom-checkbox--pendant .custom-checkbox__count"
);
const countCeiling = document.querySelector(
  ".custom-checkbox--ceiling .custom-checkbox__count"
);
const countOverhead = document.querySelector(
  ".custom-checkbox--overhead .custom-checkbox__count"
);
const countPoint = document.querySelector(
  ".custom-checkbox--point .custom-checkbox__count"
);
const countNightlights = document.querySelector(
  ".custom-checkbox--nightlights .custom-checkbox__count"
);

const filterData = {
  pendant: 0,
  ceiling: 0,
  overhead: 0,
  point: 0,
  nightlights: 0,
};

export const sortCatalog = (data) => {
  data.forEach((element) => {
    element.type.find((item) => {
      if (item === "pendant") {
        filterData.pendant += 1;
      }

      if (item === "ceiling") {
        filterData.ceiling += 1;
      }

      if (item === "overhead") {
        filterData.overhead += 1;
      }

      if (item === "point") {
        filterData.point += 1;
      }

      if (item === "nightlights") {
        filterData.nightlights += 1;
      }
    });
  });

  countPendan.textContent = filterData.pendant;
  countCeiling.textContent = filterData.ceiling;
  countOverhead.textContent = filterData.overhead;
  countPoint.textContent = filterData.point;
  countNightlights.textContent = filterData.nightlights;
};
