const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const btn = document.querySelector(".btn");
const h1 = document.querySelector(".h1");

function sum() {
  const result = +input.value * +input2.value;
  h1.innerText = result;
}

btn.addEventListener("click", sum);
