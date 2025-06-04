//인사
// function sayhello(name) {
//     return '안녕'+ name;
// }
// let hihi = sayhello("빵");
// console.log(hihi);
//이름을 입력받아서 인사
function hi(name) {
    return '안녕' + name +'~!'
}
let user = prompt('이름을 입력해주세요');
document.writeln(hi(user));
//두 수 입력받아서 계산
// function add(a,b) {
//     return a + b;
// }
// let num1 = parseInt(prompt('첫번째 수를 입력하세요'));
// let num2 = parseInt(prompt('두번째 수를 입력하세요'));
// let a = num1;
// let b = num2;
// const result = add(num1,num2)
// console.log(result)
//홀수이면 false 짝수이면 true
// function number(a) {
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let num = parseInt(prompt("수를 입력하세요"));
// console.log(number(number));

//배열을 받아서, 배열의 첫 번째 값을 반환하는 함수 만들기
let arr = ["apple", "banana", "orange"];
function first(arr) {
    console.log(arr[0]);

}
first(arr);