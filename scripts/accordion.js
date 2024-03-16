document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const wrapper = item.querySelector(".accordionWrapper");
    const arrow = item.querySelector(".accordion__arrow");
    const content = item.querySelector(".accordion__content");

    wrapper.addEventListener("click", function () {
      item.classList.toggle("open");
      arrow.classList.toggle("rotate");

      if (item.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
        // Возвращаем цвет стрелки к исходному при закрытии
        arrow.style.fill = "#050C26";
      }
    });
  });
});
