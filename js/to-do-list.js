const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOLIST = "todo-list";

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li)

}

function submitToDo(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDo = localStorage.getItem(TODOLIST);

if(savedToDo!==null) {
    const parsedToDo = JSON.parse(savedToDo)
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}