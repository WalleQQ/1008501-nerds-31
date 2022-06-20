const slides = document.querySelectorAll(".headline-slider-item");
const pagination = document.querySelectorAll(".slider-button");

const removeCurrent = () => {
  pagination.forEach((item) => {
    item.classList.remove("slider-button-current");
  });
  slides.forEach((slide) => {
    slide.classList.add("visually-hidden");
  });
};

pagination.forEach((item, i) => {
  item.addEventListener("click", (evt) => {
    removeCurrent();
    evt.target.classList.add("slider-button-current");
    slides[i].classList.remove("visually-hidden");
  });
});
