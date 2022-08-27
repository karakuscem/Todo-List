import { todoListDiv, todoItems } from ".";
import { checkTodo } from "./checkTodo";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { showToDo } from "./showToDo";

// Get todays date
const todayBtn = document.querySelectorAll("#todayBtn");
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
const addListButton = document.querySelector(".addList");

// Function for filtering today's todo.
export function todayPage(){
    todayBtn.forEach(btn => btn.addEventListener("click", () => {
        let pageTitle = document.querySelector(".pageTitle");
        if(pageTitle){pageTitle.remove()};
        addListButton.style.display="none";
        todoListDiv.innerHTML = "";
        if (!todoItems) {
            localStorage.setItem("todoItems", JSON.stringify([]));
            todoItems = JSON.parse(localStorage.getItem("todoItems"));
        } 
        let todaysItems = todoItems;
        todaysItems = todaysItems.filter(td => td.date == today)
        todaysItems.forEach(td => {
            showToDo(td);
        })
        deleteTodo();
        editTodo();
        checkTodo();
    }))
}