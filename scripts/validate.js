"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".submit-button").addEventListener("click", validateForm);
});

const formGeneral = document.querySelector("#form-general");
const formGaming = document.querySelector("#form-gaming");

function validateForm() {
  formGeneral.classList.add("submitted");
  formGaming.classList.add("submitted");

  if (formGeneral.checkValidity() && formGaming.checkValidity()) {
    finalSlide();
    submitData();
  } else {
    reportErrors();

    const container = document.querySelector(".slides-container");

    if (formGeneral.checkValidity() === false) {
      //Go to invalid slide
      container.style.transform = `translateX(-${calculateTranslateX(1)}%)`;

      //Remove previous and set new active slide and nav-dot
      updateActiveElements(1);
    } else if (formGaming.checkValidity() === false) {
      //Go to invalid slide
      container.style.transform = `translateX(-${calculateTranslateX(2)}%)`;

      //Remove previous and set new active slide and nav-dot
      updateActiveElements(2);
    }
  }
}

function submitData() {
  console.log("submittingData");
}

function reportErrors() {
  console.log("reportingErrors");

  //formGeneral.reportValidity();
  //formGaming.reportValidity();
}

function finalSlide() {
  //Declare constants and get the current slide
  const container = document.querySelector(".slides-container");
  const nextSlideInt = 4;

  //Remove previous and set new active slide and nav-dot
  updateActiveSlide(nextSlideInt);
  updateDataCurrentSlide(nextSlideInt);

  //Increment slide-container accordingly
  const increment = calculateTranslateX(nextSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

function calculateTranslateX(newSlideInt) {
  //Declare constants
  const quarter = (1 / 4) * 100;
  const increment = newSlideInt * quarter - quarter;

  return increment;
}

function updateActiveElements(int) {
  updateActiveSlide(int);
  updateActiveDot(int);
  updateDataCurrentSlide(int);
}

function updateActiveSlide(int) {
  //Remove previous and set new active
  const newSlide = document.querySelector(`.slide[data-slide="${int}"]`);
  document.querySelector(".slide.active").classList.remove("active");
  newSlide.classList.add("active");
}

function updateActiveDot(int) {
  //Remove previous and set new active
  const newDot = document.querySelector(`.nav-dot[data-dot="${int}"]`);
  document.querySelector(".nav-dot.active").classList.remove("active");
  newDot.classList.add("active");
}

function updateDataCurrentSlide(int) {
  //Change data-current of popup to new slide value
  const popup = document.querySelector(".popup");
  popup.dataset.current = int;
}
