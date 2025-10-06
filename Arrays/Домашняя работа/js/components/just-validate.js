export const formValidate = () => {
  const validation = new JustValidate(".questions__form");

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите ваше имя",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимум 3 символа",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Максимум 20 символов",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите вашу почту",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный email",
      },
    ])
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Вы должны согласиться с политикой конфиденциальности",
      },
    ])
    .onSuccess(async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      try {
        const response = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          showModal("Успешно! Ваша заявка отправлена.");
        } else {
          showModal("Ошибка отправки формы. Попробуйте позже.");
        }
      } catch {
        showModal("Ошибка соединения. Проверьте интернет и попробуйте снова.");
      }
    });

  function showModal(message) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
      <div class="modal__content">
        <button class="modal__close" aria-label="Закрыть">&times;</button>
        <p>${message}</p>
      </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".modal__close");
    closeBtn.addEventListener("click", () => {
      modal.remove();
    });
  }
};
