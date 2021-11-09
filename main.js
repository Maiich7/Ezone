"use strict";

import "./styles/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector(".theme-switch").addEventListener("click", switchTheme);
  document.querySelector(".arrow-previous").addEventListener("click", slidePrevious);
  document.querySelector(".arrow-next").addEventListener("click", slideNext);
  document.querySelectorAll(".nav-dot").forEach((el) => {
    el.addEventListener("click", switchSlide);
  });
});

function switchTheme() {
  let html = document.querySelector("html");

  if (html.dataset.theme === "dark") {
    console.log("dark");

    html.dataset.theme = "light";
  } else if (html.dataset.theme === "light") {
    console.log("light");

    html.dataset.theme = "dark";
  }
}

function slidePrevious() {
  //Declare constants and get the current slide
  const container = document.querySelector(".slides-container");
  const currentSlideInt = getCurrentSlideInt();
  const previousSlideInt = currentSlideInt - 1;

  //Remove previous and set new active
  const previousSlide = document.querySelector(`.slide[data-slide="${previousSlideInt}"]`);
  document.querySelector(".active").classList.remove("active");
  previousSlide.classList.add("active");

  //Increment slide-container accordingly
  const increment = calculateTranslateX(previousSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

function slideNext() {
  //Declare constants and get the current slide
  const container = document.querySelector(".slides-container");
  const currentSlideInt = getCurrentSlideInt();
  const nextSlideInt = currentSlideInt + 1;

  //Remove previous and set new active
  const nextSlide = document.querySelector(`.slide[data-slide="${nextSlideInt}"]`);
  document.querySelector(".slide.active").classList.remove("active");
  nextSlide.classList.add("active");

  //Increment slide-container accordingly
  const increment = calculateTranslateX(nextSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

function getCurrentSlideInt() {
  const currentSlideInt = parseInt(document.querySelector(".active").dataset.slide);

  return currentSlideInt;
}

function switchSlide(e) {
  //Get designated slide
  const container = document.querySelector(".slides-container");
  const newSlideInt = e.target.dataset.dot;

  //Animate nav dots
  document.querySelector(".nav-dot.active").classList.remove("active");
  e.target.classList.add("active");

  //Increment slide-container accordingly
  const increment = calculateTranslateX(newSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

function calculateTranslateX(newSlideInt) {
  //Declare constants
  const third = (1 / 3) * 100;
  const increment = newSlideInt * third - third;

  return increment;
}
