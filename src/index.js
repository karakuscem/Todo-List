import { showAddTaskForm } from "./showTaskForm";
import { showToDo } from "./showToDo";
export const todoItems = JSON.parse(localStorage.getItem("todoItems"));
export const todoListDiv = document.querySelector(".list")
const startApp = () => {
    if(!todoItems) {
        localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
        todoListDiv.innerHTML = "";
        todoItems.forEach(todoItem => {
            showToDo(todoItem);
        })
    }
}

startApp();
showAddTaskForm();
