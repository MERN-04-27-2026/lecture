// named import
import { sum, divide, subtract, product } from "./math";

// import something that's a "export default"
// no {}
//
// import Pizza from "./Pizza";
// import { toppings, baseCost } from "./Pizza";

import Pizza, { baseCost, toppings } from "./Pizza";

console.log("day 10");

// console.log(sum(1,1))

// console.log(Pizza);

// DOM manipulation

// id selector
const titleElem = document.getElementById("title");
console.log(titleElem);

// similar to CSS selector
// querySelector: selects the first element that matches the selector
// querySelectorAll: selects all matching elements
const boxModelContainer = document.querySelector("#box-model");

// create a new box element
const boxElem = document.createElement("div");
boxElem.innerHTML = "<div class='box'>D</div>"
// boxElem.textContent = "D";
// boxElem.classList.add("box");
boxModelContainer.append(boxElem)


const day11Btn = document.getElementById("day11-btn");
day11Btn.addEventListener("click", ()=>{
    console.log("hello");
})