"use strict";
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Select Elements
const spanInput = document.getElementById("span-input");
const input = document.getElementById("input");
const btnEl = document.getElementById("btn");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const checkbox = document.getElementById("checkbox");

//Make input automatically resize to it's content
spanInput.textContent = "";
input.value = "1";

const updateSize = function () {
  spanInput.textContent = input.value;
};

input.addEventListener("input", updateSize);

const meterToFeet = 3.281;
const literToGallon = 3.785;
const kiloToPound = 2.205;

const render = function (e) {
  const inputVal = +input.value;
  const inputNum = +inputVal.toFixed(3);

  if (input.value) {
    input.value = "";
    lengthEl.innerHTML = `<strong>${inputNum}</strong> Meter = <strong>${+(
      inputNum * meterToFeet
    ).toFixed(3)}</strong> Feet | 
      <strong>${inputNum}</strong> Feet = <strong>${+(
      inputNum / meterToFeet
    ).toFixed(3)}</strong> Meter`;

    volumeEl.innerHTML = `<strong>${inputNum}</strong> Liter = <strong>${+(
      inputNum / literToGallon
    ).toFixed(3)}</strong> Gallons |
      <strong>${inputNum}</strong> Gallons = <strong>${+(
      inputNum * literToGallon
    ).toFixed(3)}</strong> Liter`;

    massEl.innerHTML = `<strong>${inputNum}</strong> kilo = <strong>${+(
      inputNum * kiloToPound
    ).toFixed(3)}</strong> Pound |
      <strong>${inputNum}</strong> Pound = <strong>${+(
      inputNum / kiloToPound
    ).toFixed(3)}</strong> Kilo`;
  }
};

btnEl.addEventListener("click", render);

//dark-light mode
const container = document.querySelector(".container");
const headerResult = document.querySelectorAll(".header-result");
const textResult = document.querySelectorAll(".text-result");
const result = document.querySelectorAll(".result");
const toggleTheme = function () {
  container.classList.toggle("dark-bg");
  headerResult.forEach((e) => {
    e.classList.toggle("dark-header-result");
  });
  textResult.forEach((e) => {
    e.classList.toggle("dark-text-result");
  });
  result.forEach((e) => {
    e.classList.toggle("dark-result-bg");
  });
};

checkbox.addEventListener("change", toggleTheme);
