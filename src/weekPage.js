import { todoListDiv, todoItems } from ".";
import { showToDo } from "./showToDo";
import add from "date-fns/add";
import format from "date-fns/format";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";


const weekBtn = document.querySelectorAll("#weekBtn");
let dates = []
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth()).padStart(2, '0');
let yyyy = today.getFullYear();
for(let i = 0; i < 7; i++) {
    let result = add(new Date(parseInt(yyyy), parseInt(mm), parseInt(dd)), {
        days: i
    })
    let formattedResult = format(new Date(result), "yyyy-MM-dd")
    dates.push(formattedResult);
}
const addListButton = document.querySelector(".addList");
export function weekPage(){
    weekBtn.forEach(btn => btn.addEventListener("click", () => {
        addListButton.style.display = "none";
        todoListDiv.innerHTML = "";
        for(let i = 0; i < 6; i++){
            let weeksItems = todoItems;
            weeksItems = weeksItems.filter(td => td.date == dates[i])
            weeksItems.forEach(td => {
                showToDo(td);
            })
        }
        deleteTodo();
        editTodo();
    }))
}