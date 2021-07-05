var slider1 = document.querySelector(".headline-slider1");
var slider2 = document.querySelector(".headline-slider2");
var slider3 = document.querySelector(".headline-slider3");
var openSliderOneButton = document.querySelector(".slider-button1");
var openSliderTwoButton = document.querySelector(".slider-button2");
var openSliderThreeButton = document.querySelector(".slider-button3");

openSliderOneButton.addEventListener("click", function () {
  slider1.classList.remove("visually-hidden");
  openSliderOneButton.classList.add("slider-button-current");
  slider2.classList.add("visually-hidden");
  openSliderTwoButton.classList.remove("slider-button-current");
  slider3.classList.add("visually-hidden");
  openSliderThreeButton.classList.remove("slider-button-current");
});

openSliderTwoButton.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderOneButton.classList.remove("slider-button-current");
  slider2.classList.remove("visually-hidden");
  openSliderTwoButton.classList.add("slider-button-current");
  slider3.classList.add("visually-hidden");
  openSliderThreeButton.classList.remove("slider-button-current");
});

openSliderThreeButton.addEventListener("click", function () {
  slider1.classList.add("visually-hidden");
  openSliderOneButton.classList.remove("slider-button-current");
  slider2.classList.add("visually-hidden");
  openSliderTwoButton.classList.remove("slider-button-current");
  slider3.classList.remove("visually-hidden");
  openSliderThreeButton.classList.add("slider-button-current");
});
