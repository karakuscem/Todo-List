import { todoItems } from ".";
import { showToDo } from "./showToDo";
import { todoListDiv } from ".";

const addListButton = document.querySelector(".addList");
const homeBtn = document.querySelectorAll("#homeBtn");

export function homePage(){
    homeBtn.forEach(btn => btn.addEventListener("click", () => {
        todoListDiv.innerHTML = ""
        addListButton.style.display = "flex";
        todoItems.forEach(td => {
            showToDo(td);
        })
    }))
}