const catalogForm = document.querySelector(".catalog-form");

const filterBytype = ({ type }) => {
  const formCheckboxes = catalogForm.querySelectorAll(
    ".custom-checkbox__field:checked"
  );

  if (formCheckboxes.length) {
    return Array.from(formCheckboxes).some((item) => type.includes(item.value));
  }

  return true;
};

const filterBystatus = ({ availability }) => {
  const formRadiobox = catalogForm.querySelector(
    ".custom-radio__field:checked"
  );
  if (formRadiobox && formRadiobox.value === "instock") {
    return (
      availability.moscow ||
      availability.orenburg ||
      availability.saintPetersburg
    );
  }
  return true;
};

export const filterData = (item) => filterBystatus(item) && filterBytype(item);
