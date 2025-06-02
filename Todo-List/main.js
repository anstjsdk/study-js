// 할 일 목록을 localStorage에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // localStorage에 아이템저장
  // localStorage에는 문자열로 반환
  // setItem(Key값,value값)
}

// 할 일 삭제 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  //  event(클릭)의 target(버튼)의 부모요소인 li를 상수 li에 지정
  li.remove();
  // li에 있는 값을 지움
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // filter는 arr에서 조건에 맞지않는 요소를 삭제하고 새로운 배열을 만듦
  //바로 위에 줄에서 li가 삭제 되었기 때문에 li와 toDO랑 값이 같지않기때문에 filter함수를 실행했을 때 조건에 맞지않아 삭제된 li는 빼고 arr생성
  saveToDos();
  //저장
}

// 할 일 하나를 화면에 그리는 함수
function paintToDo(todo) {
  // 화면에 보이도록 지정
  const li = document.createElement("li");
  // 상수li에 새로운 li요소를 만들어 저장한다
  li.id = todo.id;
  // li.id와 todo.id
  const span = document.createElement("span");
  span.innerText = todo.text;
  //span에 todo를 넣음
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.append(span, button);
  //두개이상 넣을 때
  toDoList.append(li);
  //
}

// 폼 제출 시 실행되는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoText = toDoInput.value.trim();
  if (newTodoText === "") return; // 빈 값 방지

  toDoInput.value = "";
  const newTodoObj = {
    text: newTodoText,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  //toDos 배열에 newTOdobj추가
  paintToDo(newTodoObj);
  saveToDos();
}

// ==========================
// 2. DOM 요소 및 변수 선언부
// ==========================
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

// ==========================
// 3. 이벤트 리스너 및 초기 실행부
// ==========================

// 폼 제출 이벤트 연결
toDoForm.addEventListener("submit", handleToDoSubmit);

// 저장된 할 일 목록 불러와서 화면에 출력
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}

// element의 id를 받아 와서 상수에 저장
const a = document.getElementById("element");
// name, id를 가진 userInfo 라는 Object를 생성
const userInfo = {
  name: toDos,
  id: todolist,
};
// button에 click이라는 이벤트가 발생하면 deleteUser이라는 함수를 실행
const button = document.getElementById("button");
button.addEventListener("click",deleteuser)