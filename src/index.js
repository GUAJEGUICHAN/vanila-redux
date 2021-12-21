import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const display = document.querySelector("span");
let number = 0;

const InitialState = {
  number: 1,
  word: ""
};
function reducer(state = InitialState, action) {
  const { number } = state;
  if (action.type === "add") {
    return {
      ...state,
      number: number + 1
    };
  }
  return state;
}

const store = createStore(reducer);

add.addEventListener("click", () => {
  console.log(store.getState());
  store.dispatch({
    type: "add"
  });
  console.log(store.getState());
});
