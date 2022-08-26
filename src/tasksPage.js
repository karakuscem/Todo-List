import { todoItems } from ".";
import { showToDo } from "./showToDo";
import { todoListDiv } from ".";

const addListButton = document.querySelector(".addList");
const taskBtn = document.querySelectorAll("#tasksBtn");

export function tasksPage(){
    taskBtn.forEach(btn => btn.addEventListener("click", (e) => {
        todoListDiv.innerHTML = ""
        addListButton.style.display = "none";
        todoItems.forEach(td => {
            showToDo(td);
        })
    }))
}