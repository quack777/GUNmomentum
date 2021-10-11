const formTodo = document.getElementById("todoForm");
const input = formTodo.querySelector("input");
const ulTodos = document.querySelector("#todos");

let todos = [];
const aaa = "12";
function creatList(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  // const btn = document.createElement("button")

  const imaa = document.createElement("i");
  const btn = document.createElement("button");
  imaa.className = "fa-solid fa-xmark fa-2x";
  // btn.appendChild(imaa);
  const del = document.createElement("del");
  del.classList.add("transparent");

  span.innerText = todo.todo;
  li.id = todo.id;
  li.appendChild(btn);
  del.appendChild(span);
  li.appendChild(del);
  li.appendChild(imaa);
  ulTodos.appendChild(li);
  imaa.addEventListener("click", todoDeleat);
  btn.addEventListener("click", spanOutDel);
}

const spanOutDel = (e) => {
  //span 부모로 del을 추가하고 싶음
  const del = e.path[1].childNodes[1]
  del.classList.toggle("transparent");
};

function handleSubmitTodo(e) {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  const todoObject = {
    todo: todo,
    id: Date.now(),
  };
  creatList(todoObject);
  //여기에 입력한 {todo}를 localstorage에도 저장해서 reload해도 계속남아있게
  todos.push(todoObject);
  savintTodo();
}

function savintTodo() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function todoDeleat(e) {
  const deleateLi = e.target.parentElement;
  deleateLi.remove();
  //여기서 local에 있는 것도 지워야함
  const localTodo = JSON.parse(localStorage.getItem("todo"));
  let dele = localTodo.filter((a) => a.id !== Number(deleateLi.id));
  todos = dele;
  savintTodo();
}

if (localStorage.getItem("todo") !== null) {
  const localTodo = JSON.parse(localStorage.getItem("todo"));
  todos = localTodo;
  localTodo.forEach(creatList);
}

formTodo.addEventListener("submit", handleSubmitTodo);
