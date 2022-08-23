const main_todo_form = document.querySelector("#main-todo-form");
const main_todo_registerbtn = main_todo_form.querySelector(
  ".main-todo_register"
);
const main_todo_input = main_todo_form.querySelector("input");
const main_todo_removebtn = main_todo_form.querySelector(".main-todo_remove");
const your_main_todo = document.querySelector(".your-main-todo");

const MAIN_TODO_TEXT = "main_todo";
const HIDDEN_TEXT = "hidden";

function registerMainTodos(event) {
  event.preventDefault();
  // 로컬 스토리지에 MAINTODO를 등록한다
  // MAINTODO는 main_todo_input에 작성되어 있다
  const maintodo = main_todo_input.value;
  localStorage.setItem(MAIN_TODO_TEXT, maintodo);
  // MAINTODO 를 출력한다
  writeMainTodos(maintodo);
}

function deleteMainTodos(event) {
  // localstorage 삭제
  console.dir(event);
  localStorage.removeItem(MAIN_TODO_TEXT);
  // main-todo 등록 form을 보여준다
  // your-todo 를 숨긴다
  main_todo_form.classList.remove(HIDDEN_TEXT);
  your_main_todo.classList.add(HIDDEN_TEXT);
  // 삭제버튼 X를 없애준다
  const removeBtnTarget = event.target;
  removeBtnTarget.remove();
}

function writeMainTodos(yourMainTodo) {
  // MAINTODO 입력 form을 숨긴다
  // 숨겨져 있던 your-main-todo 를 드러낸다
  main_todo_form.classList.add(HIDDEN_TEXT);
  your_main_todo.classList.remove(HIDDEN_TEXT);
  // Main Todo를 출력한다
  const main_todo_title = your_main_todo.querySelector("span:first-child");
  main_todo_title.innerText = "TODAY";
  const your_main_todo_text = your_main_todo.querySelector("span:nth-child(2)");
  your_main_todo_text.innerText = yourMainTodo;
  // remove 버튼을 추가한다
  const your_main_todo_btn_loc =
    your_main_todo.querySelector("span:last-child");
  const your_main_todo_btn = document.createElement("button");

  your_main_todo_btn_loc.appendChild(your_main_todo_btn);
  your_main_todo_btn.classList.add("main-todo-remove_button");
  your_main_todo_btn.innerHTML = `X`;
  your_main_todo_btn.addEventListener("click", deleteMainTodos);

  // remove 버튼에 eventlistener, 삭제기능 추가
}

main_todo_form.addEventListener("submit", registerMainTodos);

const savedMainTodo = localStorage.getItem(MAIN_TODO_TEXT);

if (savedMainTodo === null) {
  // 메인 TODO 등록 form을 보여준다
  // main-todo-form 은 원래 hidden이 없다
  // your-main-todo 는 원래 hidden이다
} else {
  // 메인 TODO 등록한게 있으면 form을 숨긴다
  // 메인 TODO를 출력한다
  writeMainTodos(savedMainTodo);
}
