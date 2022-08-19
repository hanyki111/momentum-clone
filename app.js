const form = document.querySelector("#login-form");
const input = form.querySelector("input");
const btn = form.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = input.value;
    form.classList.toggle(HIDDEN_CLASSNAME);
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    greeting.innerText = `hello ${username}`;
}

form.addEventListener("submit", onLoginSubmit)
