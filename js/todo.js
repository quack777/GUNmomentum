const formTodo = document.getElementById("todoForm");
const input = formTodo.querySelector("input");
const ulTodos = document.querySelector("#todos");

let todos = [];

function creatList(todo) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  const btn = document.createElement("button")
  //const i = document.createElement("i")
  //i.className = "fas fa-times"
  span.innerText = todo.todo;
  li.id = todo.id;
  //btn.appendChild(i)
  li.appendChild(span)
  li.appendChild(btn)
  ulTodos.appendChild(li)
  btn.addEventListener("click", todoDeleat)
}

function handleSubmitTodo(e) {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  const todoObject = {
    todo: todo,
    id: Date.now()
  }
  creatList(todoObject)
  //여기에 입력한 {todo}를 localstorage에도 저장해서 reload해도 계속남아있게
  todos.push(todoObject)
  savintTodo()
}

function savintTodo() {
  localStorage.setItem("todo", JSON.stringify(todos))
}

function todoDeleat(e) {
  const deleateLi = e.target.parentElement;
  deleateLi.remove()
  //여기서 local에 있는 것도 지워야함
  const localTodo = JSON.parse(localStorage.getItem("todo"));
  let dele = localTodo.filter(a => a.id !== Number(deleateLi.id))
  todos = dele
  savintTodo()
}

if(localStorage.getItem("todo") !== null) {
  const localTodo = JSON.parse(localStorage.getItem("todo"));
  todos = localTodo;
  localTodo.forEach(creatList)
}

formTodo.addEventListener("submit", handleSubmitTodo)