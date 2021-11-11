"use strict";

import "./../styles/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  // document.querySelector(".appetizer").classList.add("")
  document.querySelector(".theme-switch").addEventListener("click", switchTheme);
  document.querySelector(".arrow-previous").addEventListener("click", slidePrevious);
  document.querySelector(".arrow-next").addEventListener("click", slideNext);
  document.querySelectorAll(".nav-dot").forEach((el) => {
    el.addEventListener("click", switchSlide);
  });

  document.querySelector('input[type="password"').addEventListener("keydown", cancelInputSwitch);
});

function switchTheme() {
  let html = document.querySelector("html");

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
  } else if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
  }
}

function slidePrevious() {
  //Declare constants and get the current slide
  const container = document.querySelector(".slides-container");
  const currentSlideInt = getCurrentSlideInt();
  const previousSlideInt = currentSlideInt - 1;

  //Remove previous and set new active slide and nav-dot
  updateActiveElements(previousSlideInt);

  //Increment slide-container accordingly
  const increment = calculateTranslateX(previousSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

function slideNext() {
  //Declare constants and get the current slide
  const container = document.querySelector(".slides-container");
  const currentSlideInt = getCurrentSlideInt();
  const nextSlideInt = currentSlideInt + 1;

  //Remove previous and set new active slide and nav-dot
  updateActiveElements(nextSlideInt);

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

  //Remove previous and set new active slide and nav-dot
  updateActiveElements(newSlideInt);

  //Increment slide-container accordingly
  const increment = calculateTranslateX(newSlideInt);
  container.style.transform = `translateX(-${increment}%)`;
}

export function calculateTranslateX(newSlideInt) {
  //Declare constants
  const quarter = (1 / 4) * 100;
  const increment = newSlideInt * quarter - quarter;

  return increment;
}

export function updateActiveElements(int) {
  updateActiveSlide(int);
  updateActiveDot(int);
  updateDataCurrentSlide(int);
}

export function updateActiveSlide(int) {
  //Remove previous and set new active
  const newSlide = document.querySelector(`.slide[data-slide="${int}"]`);
  document.querySelector(".slide.active").classList.remove("active");
  newSlide.classList.add("active");
}

export function updateActiveDot(int) {
  //Remove previous and set new active
  const newDot = document.querySelector(`.nav-dot[data-dot="${int}"]`);
  document.querySelector(".nav-dot.active").classList.remove("active");
  newDot.classList.add("active");
}

export function updateDataCurrentSlide(int) {
  //Change data-current of popup to new slide value
  const popup = document.querySelector(".popup");
  popup.dataset.current = int;
}

function cancelInputSwitch(e) {
  if (e.keyCode === 9) {
    e.preventDefault();
  }
}
