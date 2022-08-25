import { todoListDiv } from ".";
import { showToDo } from "./showToDo";

export function showProjectTasks(){
    const allProjectButtons = document.querySelectorAll("#projectButton");
    allProjectButtons.forEach(button => button.addEventListener("click", (e) => {
        let projectName = e.target.innerHTML;
        let projectStorage = JSON.parse(localStorage.getItem(`${projectName}`));

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
        
        todoListDiv.innerHTML = "";
        projectStorage.forEach(todoItem => {
            showToDo(todoItem);
        });
    }))
}