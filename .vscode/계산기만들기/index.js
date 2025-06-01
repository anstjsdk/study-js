const calculation = document.querySelector(".calculation");
const input1 = document.getElementById("inputNumber1");
const input2 = document.getElementById("inputNumber2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

function onSubmit(event) {
  event.preventDefault();
  // 폼 제출시에 초기화를 막음
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  //   사용자에게 입력받은 값를 문자열에서 숫자로 바꿔줌
  const oper = operator.value;
  //   드롭다운에서 선택된 값을 가져옴
  let resultValue;
  //   나중에 결과값을 넣기위한 빈 변수
  if (oper === '+') {
    resultValue = num1 + num2
  }
  else if  (oper === '-'){
    resultValue = num1 - num2
  }
  else if (oper === '*') {
    resultValue = num1 * num2
  }
  else if (oper === '/') {
    if (num2 === 0){
    result.innerText = "0으로 나눌 수 없습니다";
        return; 
        // 함수실행을 멈춰야 Infinity가 뜨지 않는다
    }
    resultValue = num1 / num2
  }
  

  result.innerText = `결과는 ${resultValue}입니다`
}
calculation.addEventListener('submit', onSubmit);
// 폼이 제출(submit)될 때, onSubmit이라는 함수를 실행
// submit은 이벤트 이름이기 때문에 문자열로 감싼다
