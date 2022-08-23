import { showToDo } from "./showToDo";
import { todoItems, todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
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
    if(addTaskTitle.value == "" || addTaskDescription.value == "" || addTaskDate.value == ""){
        alert("You must fill all the blanks.")
    }
    else{
        todoItems.push(todo);
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
        todoListDiv.innerHTML = "";
        todoItems.forEach(todoItem => {
            showToDo(todoItem);
        })
        deleteTodo();
        editTodo();
    }
    addTaskForm.style.display = "none";
    addListDiv.style.display = "flex";
}