import { todoItems } from ".";
import { showToDo } from "./showToDo";
import { todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { checkTodo } from "./checkTodo";

const addListButton = document.querySelector(".addList");
const homeBtn = document.querySelectorAll("#homeBtn");
//If user click on homepage button show homepage
export function homePage(){
    homeBtn.forEach(btn => btn.addEventListener("click", () => {
        let pageTitle = document.querySelector(".pageTitle");
        if(pageTitle){pageTitle.remove()};
        todoListDiv.innerHTML = ""
        // User should be able to add todo items at homepage
        addListButton.style.display = "flex";
        if (!todoItems) {
            localStorage.setItem("todoItems", JSON.stringify([]));
            todoItems = JSON.parse(localStorage.getItem("todoItems"));
        } 
        todoItems.forEach(td => {
            showToDo(td);
        })
        deleteTodo();
        editTodo();
        checkTodo();
    }))
}