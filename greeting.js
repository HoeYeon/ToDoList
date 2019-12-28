const form = document.querySelector(".js-form");
const user_name = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_KEY = "currentUser";
const SHOWING_C = "showing";

function saveName(text){
    localStorage.setItem(USER_KEY,text);
}
// Form의 Default기능을 없애고자 하는 함수
function handleSubmit(event){
    event.preventDefault();
    const currentValue = user_name.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_C);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_C);
    greeting.classList.add(SHOWING_C);
    greeting.innerText = `Hello! ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_KEY);
    if (currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
