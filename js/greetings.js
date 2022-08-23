const form = document.querySelector("#login-form");
const input = form.querySelector("input");
const btn = form.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = input.value;
    form.classList.add(HIDDEN_CLASSNAME);    
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
    form.classList.remove(FLEX_CLASSNAME);
    form.classList.add(HIDDEN_CLASSNAME);
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