"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".button").addEventListener("click", togglePopup);
  document.querySelector(".return-button").addEventListener("click", removePopup);
});

function togglePopup() {
  const popup = document.querySelector(".popup");
  if (popup.classList.contains("displayed") === false) {
    //Add transition duration
    popup.style.transitionDuration = "0.5s";

    //Show popup
    popup.classList.add("displayed");

    //Add eventListener for close-button
    document.querySelector(".close-button").addEventListener("click", closePopup);
  } else {
    //Hide popup
    popup.classList.remove("displayed");

    //Remove eventListener for close-button
    document.querySelector(".close-button").removeEventListener("click", closePopup);
  }
}

function closePopup() {
  //Hide popup
  const popup = document.querySelector(".popup");
  popup.classList.remove("displayed");
}

function removePopup() {
  //Hide popup
  const popup = document.querySelector(".popup");
  popup.classList.remove("displayed");

  setTimeout(function () {
    //Get popup button
    const appetizer = document.querySelector(".appetizer-slide");

    //Reverse sliding animation
    appetizer.classList.remove("appetizer-slide");
    appetizer.offsetHeight;
    appetizer.classList.add("appetizer-slide");
    appetizer.style.animationDirection = "reverse";
  }, 350);
}
