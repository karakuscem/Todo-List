import { todoItems } from ".";
import { showToDo } from "./showToDo";
import { todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { checkTodo } from "./checkTodo";

const addListButton = document.querySelector(".addList");
const taskBtn = document.querySelectorAll("#tasksBtn");

// Function for showing tasks page
export function tasksPage(){
    taskBtn.forEach(btn => btn.addEventListener("click", () => {
        let pageTitle = document.querySelector(".pageTitle");
        if(pageTitle){pageTitle.remove()};
        todoListDiv.innerHTML = ""
        // User shouldn't be able to add todo at tasks page
        addListButton.style.display = "none";
        todoItems.forEach(td => {
            showToDo(td);
        })
        deleteTodo();
        editTodo();
        checkTodo();
    }))
}