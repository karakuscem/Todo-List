import { showToDo } from "./showToDo";
import { todoItems, todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { checkTodo } from "./checkTodo";

//Function to add storage
export function addTodoStorage() {
    const addTaskTitle = document.querySelector("#addTaskTitle");
    const addTaskDescription = document.querySelector("#addTaskDescription")
    const addTaskDate = document.querySelector("#addTaskDate");
    const addListDiv = document.querySelector(".addList")
    const addTaskForm = document.querySelector("#addTaskForm")
    const todo = {
        isCompleted: false,
        title: addTaskTitle.value,
        description: addTaskDescription.value,
        date: addTaskDate.value,
    };
    //Check if all blanks are filled
    if(addTaskTitle.value == "" || addTaskDescription.value == "" || addTaskDate.value == ""){
        alert("You must fill all the blanks.")
        return;
    }
    // Check user in project page, if so add todo item to project storage
    let pageTitle = document.querySelector(".pageTitle");
    if(pageTitle && pageTitle.innerHTML in localStorage) {
        let projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
        if (!projectStorage) {
            localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify([]));
            projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
        } 
        projectStorage = projectStorage.filter(td => td.title != todo.title);
        projectStorage.push(todo);
        localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify(projectStorage));
        todoListDiv.innerHTML = "";
        projectStorage.forEach(todoItem => {
            showToDo(todoItem);
        })
        deleteTodo();
        editTodo();
        checkTodo();
    }
    // If user not in project page save todo to default storage
    else if (!pageTitle){
        if (!todoItems) {
            localStorage.setItem("todoItems", JSON.stringify([]));
            todoItems = JSON.parse(localStorage.getItem("todoItems"))
        } 
        todoItems.push(todo);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        todoListDiv.innerHTML = "";
        todoItems.forEach(todoItem => {
            showToDo(todoItem);
        })
        deleteTodo();
        editTodo();
        checkTodo();
    }
    addTaskForm.style.display = "none";
    addListDiv.style.display = "flex";
}