const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelector("input");
const Whatsname = loginForm.querySelector("h1");
const loginSuccess = loginForm.querySelector("p");

const HIDDEN_CLASS = "hidden"
function onLoginSubmit(e) {
  e.preventDefault();
  const newName = loginInput.value;
  success(newName)
  savingName(newName)
}

function savingName(newName) {
  localStorage.setItem("name", newName);
}

function success(name) {
  loginSuccess.innerText = `Hello ${name}`
  loginInput.classList.add(HIDDEN_CLASS)
  Whatsname.classList.add(HIDDEN_CLASS)
  loginSuccess.classList.remove(HIDDEN_CLASS)
}

if(localStorage.getItem("name") !== null){
  const Name = localStorage.getItem("name");
  success(Name);
}
loginForm.addEventListener("submit", onLoginSubmit)