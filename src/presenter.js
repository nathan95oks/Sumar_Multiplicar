import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumarButton = document.querySelector("#sumar-button");
const multiplicarButton = document.querySelector("#multiplicar-button");
const div = document.querySelector("#resultado-div");

sumarButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
