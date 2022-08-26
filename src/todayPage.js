import { todoListDiv, todoItems } from ".";
import { showToDo } from "./showToDo";

const todayBtn = document.querySelectorAll("#todayBtn");
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

export function todayPage(){
    todayBtn.forEach(btn => btn.addEventListener("click", () => {
        todoListDiv.innerHTML = "";
        todoItems = todoItems.filter(td => td.date == today);
        todoItems.forEach(td => {
            showToDo(td);
        })
    }))
}