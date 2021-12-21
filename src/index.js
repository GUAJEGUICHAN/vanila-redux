import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const display = document.querySelector("span");
let number = 0;

function reducer() {
  return "hello";
}

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

function numberOnDisplay() {
  display.innerHTML = number;
}
function addOne() {
  number += 1;
  numberOnDisplay();
}
function minusOne() {
  number -= 1;
  numberOnDisplay();
}

add.addEventListener("click", addOne);
minus.addEventListener("click", minusOne);
