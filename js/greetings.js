const loginForm = document.querySelector("#login-form")
const inputName = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const spanLogout = document.querySelector("#log-out");

const USERNAME_KEY = "username";
const CLASS_HIDDEN = "hidden";

function handleLogin(e){
    e.preventDefault();
    const username = inputName.value;
    localStorage.setItem(USERNAME_KEY, username);

    setHidden(true, username);
}
function handleLogout(){
    localStorage.removeItem(USERNAME_KEY);
    setHidden(false);
}
function checkLocalStorage(){
    const username = localStorage.getItem(USERNAME_KEY);
    if(username !== null){
        setHidden(true, username);
    }else{
        setHidden(false);
    }
}
function setHidden(isLogin, username){
    if(isLogin){
        spanLogout.classList.remove(CLASS_HIDDEN);
        loginForm.classList.add(CLASS_HIDDEN);
        greeting.classList.remove(CLASS_HIDDEN);
        greeting.innerText = `Hello ${username}!`
    }else{
        spanLogout.classList.add(CLASS_HIDDEN);
        loginForm.classList.remove(CLASS_HIDDEN);
        greeting.classList.add(CLASS_HIDDEN);
    }
}

loginForm.addEventListener("submit", handleLogin);
spanLogout.addEventListener("click", handleLogout);
checkLocalStorage();