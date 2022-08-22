import { addTodoStorage } from "./addTodoStorage";
export function showAddTaskForm() {
    const addTaskButton = document.querySelector("#addNewTask");
    const addTaskIcon = document.querySelector("#addNewTaskIcon");
    const addListDiv = document.querySelector(".addList");
    const addTaskForm = document.querySelector("#addTaskForm");

    addTaskButton.addEventListener("click", (e) => {
        addListDiv.style.display = "none"
        addTaskForm.style.display = "flex";
    })
    addTaskIcon.addEventListener("click", (e) => {
        addListDiv.style.display = "none"
        addTaskForm.style.display = "flex";
    })
    const addOkayButton = document.querySelector(".taskOkay");
    const addCancelButton = document.querySelector(".taskCancel");
    addOkayButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTodoStorage();
    })

    addCancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        addTaskForm.style.display = "none";
        addListDiv.style.display = "flex";
    })
}
