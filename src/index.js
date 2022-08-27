import { showAddTaskForm } from "./showTaskForm";
import { showToDo } from "./showToDo";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { addProject } from "./addProject";
import { showProjects } from "./showProject";
import { showProjectTasks } from "./showProjectTasks";
import { tasksPage } from "./tasksPage";
import { homePage } from "./homePage";
import { todayPage } from "./todayPage";
import { weekPage } from "./weekPage";
import { deleteProject } from "./deleteProject";
import { editProject } from "./editProject";

export let todoItems = JSON.parse(localStorage.getItem("todoItems"));
export let projectItems = JSON.parse(localStorage.getItem("projectItems"));
export let todoListDiv = document.querySelector(".list")
export let projectListDiv = document.querySelector(".projectSection")
// Starting app
const startApp = () => {
    if(!todoItems) {
        localStorage.setItem("todoItems", JSON.stringify([{"isCompleted":true,"title":"Do Homework","description":"Do Math book p64-68","date":"2022-08-27"},{"isCompleted":false,"title":"Wash dishes","description":"I better do it before my mom comes","date":"2022-08-27"},{"isCompleted":true,"title":"Go Gym","description":"Lift like animal 💪","date":"2022-08-27"},{"isCompleted":false,"title":"Meeting with friends","description":"8pm at Coffee shop","date":"2022-08-31"},{"isCompleted":false,"title":"Code To-Do App","description":"Check Odin Project","date":"2022-09-03"},{"isCompleted":false,"title":"Apply for University","description":"Last Date 16 September","date":"2022-09-10"}]));
    }
    else if (!projectItems) {
        localStorage.setItem("projectItems", JSON.stringify([{"title":"TO-DO APP"},{"title":"TICTACKTOE"},{"title":"CALCULATOR"},{"title":"ROCKPAPER"},{"title":"LANDING PAGE"}]));
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
// Use functions

showAddTaskForm();
deleteTodo();
editTodo();
addProject();
showProjectTasks();
tasksPage();
homePage();
todayPage();
weekPage();
deleteProject();
editProject();