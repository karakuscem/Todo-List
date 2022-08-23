export function showToDo(todo) {
    const toDoList = document.querySelector(".list");

    const liItem = document.createElement("li");
    liItem.classList.add("listItem")
    toDoList.appendChild(liItem);

    const checkBoxDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.isCompleted;
    checkBox.classList.add("check");
    liItem.appendChild(checkBoxDiv);
    checkBoxDiv.appendChild(checkBox);

    const taskTitleDiv = document.createElement("div");
    taskTitleDiv.classList.add("taskTitle");
    taskTitleDiv.textContent = todo.title;
    liItem.appendChild(taskTitleDiv);

    const taskDetailsDiv = document.createElement("div");
    taskDetailsDiv.classList.add("taskDetails");
    taskDetailsDiv.textContent = todo.description;
    liItem.appendChild(taskDetailsDiv);

    const taskDateDiv = document.createElement("div");
    taskDateDiv.classList.add("date");
    taskDateDiv.textContent = todo.date;
    liItem.appendChild(taskDateDiv);

    const taskEditIcon = document.createElement("img");
    taskEditIcon.src = "img/pencil-solid.svg";
    taskEditIcon.classList.add("taskEditIcon");
    liItem.appendChild(taskEditIcon);

    const taskDeleteIcon = document.createElement("img");
    taskDeleteIcon.src = "img/eraser-solid.svg";
    taskDeleteIcon.classList.add("taskDeleteIcon");
    liItem.appendChild(taskDeleteIcon);
}