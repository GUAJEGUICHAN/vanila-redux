import React from "react";
import ReactDom from "react-dom";
import App from "./Component/App";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const display = document.querySelector("span");
let number = 0;

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

// ReactDom.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById("app")
// );
//
