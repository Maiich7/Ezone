"use strict";

export const url = "https://ezone-cc72.restdb.io/rest/ezoners";
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "x-apikey": "618938a4fc71545b0f5e05ec",
  "cache-control": "no-cache",
};

export function submitUser() {
  const inputsGeneral = document.querySelector("#form-general").elements;
  const inputsGaming = document.querySelector("#form-gaming").elements;

  //Create the user
  const user = {
    firstName: inputsGeneral[0].value,
    lastName: inputsGeneral[1].value,
    birthday: inputsGeneral.birthday.value,
    mail: inputsGeneral.email.value,
    password: inputsGeneral.password.value,
    gamertag: inputsGaming.gamertag.value,
    hours: inputsGaming.range.value,
    games: [inputsGaming.games1.value, inputsGaming.games2.value, inputsGaming.games3.value],
    areas: [inputsGaming.improvements1.value, inputsGaming.improvements2.value, inputsGaming.improvements3.value],
  };

  console.log(user);
  postUser(user);
}

export function postUser(user) {
  const userToPost = JSON.stringify(user);
  console.log(userToPost);

  fetch(url, {
    method: "post",
    headers: headers,
    body: userToPost,
  }).then((res) => res.json());
}
