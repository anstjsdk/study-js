const loginForm = document.querySelector(".login-form");
const loginInput = document.getElementById("username");
const greeting = document.getElementById("greeting");

function onSubmit(event) {
  event.preventDefault();
  
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove("hidden");  //html 태그에 붙은 class를 다루는 도구
}
loginForm.addEventListener("submit", onSubmit);
