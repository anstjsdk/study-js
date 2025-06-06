const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

pinkBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});
blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
