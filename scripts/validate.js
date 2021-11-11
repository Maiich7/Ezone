"use strict";

//Import posting and sliding functions
import { url, headers, submitUser, postUser } from "./restdb";
import { calculateTranslateX, updateActiveElements, updateActiveSlide, updateActiveDot, updateDataCurrentSlide } from "./main";

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
    submitUser();
  } else {
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
