import { todoListDiv } from ".";
import { checkTodo } from "./checkTodo";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { showToDo } from "./showToDo";
// Function for showing project todos
export function showProjectTasks(){
    const allProjectButtons = document.querySelectorAll("#projectButton");
    // Add event listener to project buttons
    allProjectButtons.forEach(button => button.addEventListener("click", (e) => {
        // Select and get project Storage
        let projectName = e.target.innerHTML;
        let projectStorage = JSON.parse(localStorage.getItem(`${projectName}`));
        // Make sure there is a only one page title
        let pageTitle = document.querySelector(".pageTitle");
        if(pageTitle) {
            pageTitle.remove();
            let createPageTitle = document.createElement("h1");
            createPageTitle.classList.add("pageTitle")
            createPageTitle.innerHTML = projectName;
            let listToDo = document.querySelector(".listToDo");
            let listElement = document.querySelector(".list")
            listToDo.insertBefore(createPageTitle, listElement);
        }
        else {
            let createPageTitle = document.createElement("h1");
            createPageTitle.classList.add("pageTitle")
            createPageTitle.innerHTML = projectName;
            let listToDo = document.querySelector(".listToDo");
            let listElement = document.querySelector(".list")
            listToDo.insertBefore(createPageTitle, listElement);
        }
        
        // Show todo items of project
        todoListDiv.innerHTML = "";
        projectStorage.forEach(todoItem => {
            showToDo(todoItem);
        });
        checkTodo();
        editTodo();
        deleteTodo();
    }))
}