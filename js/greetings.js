const form = document.querySelector("#login-form");
const input = form.querySelector("input");
const btn = form.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = input.value;
    form.classList.toggle(HIDDEN_CLASSNAME);    
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);   
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    // show the form
    form.classList.remove(HIDDEN_CLASSNAME);
    form.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    paintGreetings(saveUsername);
}