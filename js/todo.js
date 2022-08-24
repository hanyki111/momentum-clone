const toDoBtn = document.querySelector(".todo-mainbtn_span");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
const toDoPopup = document.querySelector(".todo-popup");

let toDos = [];

const TODOS_KEY = "Todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id != li.id);
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  // newTodo 는 Obj임.
  const toDoLi = document.createElement("li");
  toDoLi.id = newTodo.id;

  const toDoLiSpan = document.createElement("span");
  toDoLiSpan.innerText = newTodo.text;

  const toDoDeleteBtn = document.createElement("button");
  toDoDeleteBtn.innerText = "X";

  toDoDeleteBtn.addEventListener("click", deleteToDo);
  toDoLi.appendChild(toDoLiSpan);
  toDoLi.appendChild(toDoDeleteBtn);
  toDoList.appendChild(toDoLi);

  toDoLi.classList.add("todo-list_li");
  toDoLiSpan.classList.add("todo-list_li_span");
  toDoDeleteBtn.classList.add("todo-remove_button");
  toDoDeleteBtn.classList.add("todo-list_li_button");
}

function handleToSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function showToDos() {
  toDoPopup.classList.toggle("hidden");
}

toDoBtn.addEventListener("click", showToDos);
