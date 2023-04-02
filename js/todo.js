const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 1

/**
 * 🚨
 * application이 시작될 때 toDos 배열은 항상 비어있다.
 * newToDo를 작성하고 form을 submit 할 때마다 newToDo를 빈 배열에 그냥 push하도록 로직이 짜여져 있음.
 * 그리고 그 toDo를 저장할 때 새로운 toDo들만 포함하고 있는 배열이 localStorage에 저장되고 있음 (이전 거 없어짐)
 * 
 * 🔍
 * application이 시작될 때 toDos 배열을 빈 값으로 시작하는 대신
 * [✔️] 1.const를 let으로 바꿔서 업데이트가 가능하도록 변경!
 * [✔️] 2.localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들 복원시키기
 */

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 2
    parsedToDos.forEach(paintToDo);
}