import { todoItems } from ".";
import { showToDo } from "./showToDo";
import { todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";

const addListButton = document.querySelector(".addList");
const taskBtn = document.querySelectorAll("#tasksBtn");

export function tasksPage(){
    taskBtn.forEach(btn => btn.addEventListener("click", () => {
        todoListDiv.innerHTML = ""
        addListButton.style.display = "none";
        todoItems.forEach(td => {
            showToDo(td);
        })
        deleteTodo();
        editTodo();
    }))
}