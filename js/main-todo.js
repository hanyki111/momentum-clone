const main_todo_form = document.querySelector("#main-todo-form");
const main_todo_registerbtn = main_todo_form.querySelector(
  ".main-todo_register"
);
const main_todo_input = main_todo_form.querySelector("input");
const main_todo_removebtn = main_todo_form.querySelector(".main-todo_remove");

const MAIN_TODO_TEXT = "main_todo";

function registerMainTodos(event) {
  event.preventDefault();
  // 로컬 스토리지에 MAINTODO를 등록한다
  // MAINTODO는 main_todo_input에 작성되어 있다
  const maintodo = main_todo_input.value;
  localStorage.setItem(MAIN_TODO_TEXT, maintodo);
  // MAINTODO 를 출력한다
}

function writeMainTodos() {
  // MAINTODO 입력 form을 숨긴다
  // 숨겨져 있던 your-main-todo 를 드러낸다
  // remove 버튼을 추가한다
  // remove 버튼에 eventlistener, 삭제기능 추가
}

main_todo_form.addEventListener("submit", registerMainTodos);

const savedMainTodo = localStorage.getItem(MAIN_TODO_TEXT);

if (savedMainTodo === null) {
  // 메인 TODO 등록창을 출력한다
} else {
  // 메인 TODO 등록한게 있으면
  // form을 숨긴다
  // 메인 TODO를 출력한다
}
