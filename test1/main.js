const check = document.querySelector(".check");

check.addEventListener("click", () => {
  let number = document.querySelector(".number-input").value;

  if (number % 2 == 0) {
    console.log("짝수입니다");
  } else {
    console.log("홀수입니다");
  }
});
