"use strict";

document.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("input", updateSummary);
});

function updateSummary(e) {
  console.log(e.target);
  //const target the id for the input field, when filled.
  const valueId = e.target.id;
  const field = document.querySelector(`p[data-input="${valueId}"]`);

  // const target the stuff that id points at :)
  const value = e.target.value;

  // update the field in summary
  field.textContent = value;
}
