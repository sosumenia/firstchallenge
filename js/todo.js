const TODO_KEY = "todos";
let toDos = [];

const formTodo = document.querySelector("#todo-form");
const inputTodo = formTodo.querySelector("input");
const ulTodo = document.querySelector("#todo-list");

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
function handleToDoSubmit(evt){
    evt.preventDefault();
    const newTodo = inputTodo.value;
    inputTodo.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    ulTodo.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}
function deleteToDo(evt){
    const li = evt.target.parentElement;
    li.remove();
    toDos = toDos.filter( (todo) => todo.id !== parseInt(li.id) );
    saveToDos();
}
function readTodos(){
    const readTodos = localStorage.getItem(TODO_KEY);
    if(readTodos !== null){
        toDos = JSON.parse(readTodos);
        toDos.forEach(paintToDo);
    }
}

formTodo.addEventListener("submit", handleToDoSubmit);
readTodos();