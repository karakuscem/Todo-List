import { todoListDiv, todoItems } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { showToDo } from "./showToDo";

const todayBtn = document.querySelectorAll("#todayBtn");
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
const addListButton = document.querySelector(".addList");

export function todayPage(){
    todayBtn.forEach(btn => btn.addEventListener("click", () => {
        addListButton.style.display="none";
        todoListDiv.innerHTML = "";
        let todaysItems = todoItems;
        todaysItems = todaysItems.filter(td => td.date == today)
        todaysItems.forEach(td => {
            showToDo(td);
        })
        deleteTodo();
        editTodo();
    }))
}