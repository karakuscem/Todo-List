import { todoListDiv, todoItems } from ".";
import { showToDo } from "./showToDo";
import add from "date-fns/add";
import format from "date-fns/format";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { checkTodo } from "./checkTodo";


const weekBtn = document.querySelectorAll("#weekBtn");
// Array for to store 7 day's dates.
let dates = []
// Get todays date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth()).padStart(2, '0');
let yyyy = today.getFullYear();
// For loop to get 7 day's dates
for(let i = 0; i < 7; i++) {
    // To add dates, date-fns used
    let result = add(new Date(parseInt(yyyy), parseInt(mm), parseInt(dd)), {
        days: i
    })
    let formattedResult = format(new Date(result), "yyyy-MM-dd")
    dates.push(formattedResult);
}

const addListButton = document.querySelector(".addList");
// Function to show this week's todos
export function weekPage(){
    weekBtn.forEach(btn => btn.addEventListener("click", () => {
        let pageTitle = document.querySelector(".pageTitle");
        if(pageTitle){pageTitle.remove()};
        // User shouldn't be able to add todo at week page
        addListButton.style.display = "none";
        todoListDiv.innerHTML = "";
        for(let i = 0; i < 6; i++){
            if (!todoItems) {
                localStorage.setItem("todoItems", JSON.stringify([]));
                todoItems = JSON.parse(localStorage.getItem("todoItems"));
            } 
            let weeksItems = todoItems;
            weeksItems = weeksItems.filter(td => td.date == dates[i])
            weeksItems.forEach(td => {
                showToDo(td);
            })
        }
        deleteTodo();
        editTodo();
        checkTodo();
    }))
}