const form = document.querySelector("#login-form");
const input = form.querySelector("input");
const btn = form.querySelector("button");
const greeting = document.querySelector("#greeting");
const greeting_clock = document.querySelector("#clock");
const greeting_maintodo = document.querySelector("#main-todo");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";
const LOGINFORM_SHOW_CLASSNAME = "login-form_show";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = input.value;
  form.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingText;

  if (currentHour >= 4 && currentHour < 12) {
    greetingText = "Good Morning, ";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = "Good Afternoon, ";
  } else if (currentHour >= 18 && currentHour < 22) {
    greetingText = "Good Evening, ";
  } else {
    greetingText = "Good Night, ";
  }

  greeting.innerText = `${greetingText}${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting_clock.classList.remove(HIDDEN_CLASSNAME);
  // form.classList.remove(FLEX_CLASSNAME);
  form.classList.remove(LOGINFORM_SHOW_CLASSNAME);
  form.classList.add(HIDDEN_CLASSNAME);
  greeting_maintodo.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  // show the form
  form.classList.remove(HIDDEN_CLASSNAME);
  form.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(saveUsername);
}
