import { todoListDiv, todoItems } from ".";
import { showToDo } from "./showToDo";
import add from "date-fns/add";
import format from "date-fns/format";


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

export function weekPage(){
    weekBtn.forEach(btn => btn.addEventListener("click", () => {
        todoListDiv.innerHTML = "";
        todoItems = todoItems.filter(td => td.date == dates[0] || td.date == dates[1] || td.date == dates[2] || td.date == dates[3] || td.date == dates[4] || td.date == dates[5] || td.date == dates[6]);
        todoItems.forEach(td => {
            showToDo(td);
        })
    }))
}