export function openCity() {
  const cityBtn = document.querySelector(".location__city");
  const sublist = document.querySelector(".location__sublist");
  const cityNameDisplay = document.querySelector(".location__city-name");
  const sublinks = document.querySelectorAll(".location__sublink");

  cityBtn.addEventListener("click", function () {
    cityBtn.classList.toggle("location__city--active");
  });

  sublinks.forEach((sublink) => {
    sublink.addEventListener("click", function () {
      cityNameDisplay.textContent = this.textContent;

      cityBtn.classList.remove("location__city--active");
    });
  });

  document.addEventListener("click", function (event) {
    if (!cityBtn.contains(event.target) && !sublist.contains(event.target)) {
      cityBtn.classList.remove("location__city--active");
    }
  });
}
