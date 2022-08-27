import { todoItems, todoListDiv } from ".";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { showToDo } from "./showToDo";

//Function to check todo
export function checkTodo(){
    let checkTodoBtn = document.querySelectorAll("#checkTodo");
    let pageTitle = document.querySelector(".pageTitle");
    // Add event listener to all check inputs.
    checkTodoBtn.forEach(check => check.addEventListener("click", (e) => {
        let listItem = e.target.parentElement.parentElement;
        let listItemTitle = listItem.getElementsByTagName("div")[1];
        let listItemDesc = listItem.getElementsByTagName("div")[2];
        let listItemDate = listItem.getElementsByTagName("div")[3];
        // If user in project page, update project todo.
        if(pageTitle && pageTitle.innerHTML in localStorage){
            let projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
            projectStorage.forEach(td => {
                if(td.title == listItemTitle.innerHTML && td.description == listItemDesc.innerHTML && td.date == listItemDate.innerHTML){
                    td.isCompleted = !td.isCompleted;
                }
            })
            localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify(projectStorage))
            todoListDiv.innerHTML = "";
            projectStorage.forEach(projectTask => {
                showToDo(projectTask);
            });
            editTodo();
            deleteTodo();
        }
        // If user not in project page, update default storage todo
        else if (!pageTitle) {
            todoItems.forEach(td => {
                if(td.title == listItemTitle.innerHTML && td.description == listItemDesc.innerHTML && td.date == listItemDate.innerHTML){
                    td.isCompleted = !td.isCompleted;
                }
            })
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
            todoListDiv.innerHTML = "";
            todoItems.forEach(todoItem => {
                showToDo(todoItem);
            });
            editTodo();
            deleteTodo();
        }
     }))
}
