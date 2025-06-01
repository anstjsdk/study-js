// const check = document.querySelector(".check");

// check.addEventListener("click", () => {
//   let number = document.querySelector(".number-input").value;

//   if (number % 2 == 0) {
//     console.log("짝수입니다");
//   } else {
//     console.log("홀수입니다");
//   }
// });



//숫자 합계 계산기,
//사용자가 여러 개의 숫자를 입력(쉼표로 구분)하면, 모든 숫자의 합을 구해서 화면에 출력하세요
let input = prompt('여러 개의 숫자를 입력');
let parts = input.split(',');
let sum = 0;
for (let i = 0; i < parts.length; i++) {
    sum+=Number(parts[i]);
}
console.log(`모든 숫자의 합은${sum}`);


