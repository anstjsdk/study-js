// 1. 변수 선언 및 DOM 요소 연결
const TODOS_KEY = "todos";
let toDos = [];
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 2. localStorage에서 기존 할 일 목록을 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) { //true값일 때 실행 
  toDos = JSON.parse(savedToDos); //string에서 object형태로 변함
}

// 3. 불러온 할 일 목록을 화면에 바로 그려줌 (반복문 사용, 함수X)
for (let i = 0; i < toDos.length; i++) {
  const todo = toDos[i];
  const li = document.createElement("li");
  li.id = todo.id;
  li.innerHTML = `
        <span>${todo.text}</span>
        <button>❌</button>
      `;
  // 삭제 버튼 이벤트 핸들러(함수는 필수)
  li.querySelector("button").addEventListener("click", function (event) {
    li.remove();
    // 빈칸
    // 2) 배열에서 해당 toDo 삭제
    toDos = toDos.filter((t) => t.id !== todo.id);
    // 3) localStorage에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  });
  toDoList.append(li);
}

// 4. 폼 제출 시 새 할 일을 추가하는 함수(이벤트 핸들러는 필수)
toDoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTodoText = toDoInput.value.trim();
  if (newTodoText === "") return;
  toDoInput.value = "";

  // 할 일 객체 생성
  const newTodoObj = {
    text: newTodoText,
    id: Date.now(), //현재시간
  };
  toDos.push(newTodoObj); //append

  // 화면에 li 추가 (위와 동일한 방식)
  const li = document.createElement("li");
  li.id = newTodoObj.id; //li아이디를 newtodo id 로 설정
  li.innerHTML = `
        <span>${newTodoObj.text}</span>
        <button>❌</button>
      `;
  li.querySelector("button").addEventListener("click", function (event) {
    li.remove();
    toDos = toDos.filter((t) => t.id !== newTodoObj.id);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  });
  toDoList.append(li);

  // localStorage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
});
