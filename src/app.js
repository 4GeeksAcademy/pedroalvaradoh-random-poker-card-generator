/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const symbolsArr = ["♦", "♥", "♠", "♣"];
const numbersArr = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const symbolColor = document.getElementsByClassName("symbolItem");
const generatorButton = document.getElementById("buttonHtml");

function getRandomCharacters(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const selectedItem = array[randomIndex];

  return selectedItem;
}
window.onload = function() {
  function buttomGenerator() {
    const randomSymbol = getRandomCharacters(symbolsArr);
    const randomNumber = getRandomCharacters(numbersArr);

    document.getElementById("topCh").innerHTML = `${randomSymbol}`;
    document.getElementById("middleCh").innerHTML = `${randomNumber}`;
    document.getElementById("bottomCh").innerHTML = `${randomSymbol}`;

    for (let i = 0; i < symbolColor.length; i++) {
      const currentSymbol = symbolColor[i];
      randomSymbol === "♥" || randomSymbol === "♦"
        ? (currentSymbol.style.color = "red")
        : (currentSymbol.style.color = "black");
    }

    if (randomNumber === "A" && randomSymbol === "♣") {
      setTimeout(function() {
        alert("You won a Green Card!!!\nSend a message to 666-this-is-a-SCAM");
      }, 200);
    }
  }
  generatorButton.addEventListener("click", buttomGenerator);
};
