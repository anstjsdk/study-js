// let count = 0;
// const counter = document.querySelector(".counter");
// const plusBtn = document.querySelector(".plus");
// const minusBtn = document.querySelector(".minus");
// const reset = document.querySelector(".reset");

// plusBtn.addEventListener("click", function () {
//   count++;
//   counter.textContent = count;
// });
// minusBtn.addEventListener("click", function () {
//   count--;
//   counter.textContent = count;
// });
// reset.addEventListener("click", function () {
//   counter.textContent = 0;
// });


const mathScore = prompt("수학몇점?");
const engScore = prompt("영어몇점?");
const result = (mathScore + engScore)/2;

console.log(result)