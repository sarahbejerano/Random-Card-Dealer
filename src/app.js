import { bottom } from "@popperjs/core";
import "./style.css";

const symbols = ["\u2660", "\u2663", "	\u2665", "	\u2666"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let topSymbol = document.querySelector("#topSymbol");
let centerNumber = document.querySelector("#centerNumber");
let bottomSymbol = document.querySelector("#bottomSymbol");

function cardSelection(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

function colorSelector(arr) {
  if (arr[0] === "	\u2665" || arr[0] === "	\u2666") {
    top.style.color = "red";
    bottom.style.color = "red";
  }
  else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
}
function symbolSelect(arr) {
  if (arr[0] === "	\u2665") {
    top.innerHTML = "	\u2665"
    bottom.innerHTML = "	\u2665"
  } else if (arr[0] === "	\u2666") {
    top.innerHTML = "	\u2666"
    bottom.innerHTML = "	\u2666"
  } else if (arr[0] === "	\u2663") {
    top.innerHTML = "	\u2663",
      bottom.innerHTML = "	\u2663",
  } else if {
    top.innerHTML = "	\u2660",
    bottom.innerHTML = "	\u2660",
  }  else if (arr[0] === "	\u2666") {
    top.innerHTML = "	\u2666",
      bottom.innerHTML = "	\u2666",
  }
  else if (arr[0] === "	\u2663") {
    top.innerHTML = "	\u2663",
      bottom.innerHTML = "	\u2663",
  }
  else {
    top.innerHTML = "	\u2660"
    bottom.innerHTML = "	\u2660"
  }


}
function cardValue(arr) {
  numbers.innerHTML = arr[1];
}
function cardGenerator(params) {
  let card = cardChoose(symbols, numbers);
  numberAssig(card);
  colorAssig(card);
  symbolsAssig(card);

}


window.onload = function () { cardGenerator };
