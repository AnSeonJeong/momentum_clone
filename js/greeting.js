const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const logoutBtn = document.querySelector(".logout");
const greeting = document.querySelector(".greeting");
const List = document.getElementById("todo-list");

const USERNAME = "username"
const HIDDEN_CLASSNAME = "hidden"

function LoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME, username);
    showGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME);

function showGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    List.classList.remove(HIDDEN_CLASSNAME);
}

function handleLogout() {
    localStorage.removeItem(USERNAME);
    window.location.reload();
}


if(savedUsername===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    showGreeting(savedUsername);
}

logoutBtn.addEventListener("click", handleLogout);
