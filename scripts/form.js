"use strict";

const jsonData = "/data.json";

fetch(jsonData)
  .then((res) => res.json())
  .then((data) => {
    showData(data.games);
  });

function showData(games) {
  const selects = document.querySelectorAll('select[name="games"]');

  selects.forEach((select) => {
    games.forEach((game) => {
      const gameOption = document.createElement("option");

      gameOption.value = game;
      gameOption.textContent = game;

      select.appendChild(gameOption);
    });
  });
}

fetch(jsonData)
  .then((res) => res.json())
  .then((data) => {
    showAreas(data.areas);
  });

function showAreas(areas) {
  const selects = document.querySelectorAll('select[name="improvements"]');

  selects.forEach((select) => {
    areas.forEach((area) => {
      const areasOption = document.createElement("option");

      areasOption.value = area;
      areasOption.textContent = area;

      select.appendChild(areasOption);
    });
  });
}
