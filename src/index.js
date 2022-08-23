import { showAddTaskForm } from "./showTaskForm";
import { showToDo } from "./showToDo";
import { deleteTodo } from "./deleteTodo";
export let todoItems = JSON.parse(localStorage.getItem("todoItems"));
export let todoListDiv = document.querySelector(".list")
const startApp = () => {
    if(!todoItems) {
        localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
        todoListDiv.innerHTML = "";
        todoItems.forEach(todoItem => {
            showToDo(todoItem);
        });
    }
}

startApp();
showAddTaskForm();
deleteTodo();