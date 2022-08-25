import { showAddTaskForm } from "./showTaskForm";
import { showToDo } from "./showToDo";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { addProject } from "./addProject";
import { showProjects } from "./showProject";
import { showProjectTasks } from "./showProjectTasks";


export let todoItems = JSON.parse(localStorage.getItem("todoItems"));
export let projectItems = JSON.parse(localStorage.getItem("projectItems"));
export let todoListDiv = document.querySelector(".list")
export let projectListDiv = document.querySelector(".projectSection")


const startApp = () => {
    if(!todoItems) {
        localStorage.setItem("todoItems", JSON.stringify([]));
    }
    else if (!projectItems) {
        localStorage.setItem("projectItems", JSON.stringify([]));
    } 
    else {
        todoListDiv.innerHTML = "";
        todoItems.forEach(todoItem => {
            showToDo(todoItem);
        });
        projectListDiv.innerHTML = "";
        projectItems.forEach(projectItem => {
            showProjects(projectItem)
        });
    }
}

startApp();
showAddTaskForm();
deleteTodo();
editTodo();
addProject();
showProjectTasks();