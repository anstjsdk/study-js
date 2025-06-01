// 할 일 목록을 localStorage에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 할 일 삭제 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// 할 일 하나를 화면에 그리는 함수
function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.append(span, button);
  toDoList.appendChild(li);
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
