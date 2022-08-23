import { todoItems } from ".";
export function editTodo(){
    const editIcons = document.querySelectorAll(".taskEditIcon");
    editIcons.forEach(edit => edit.addEventListener("click", (e) => {
        let listItem = e.target.parentElement
        let listItemTitle = listItem.getElementsByTagName("div")[1];
        let listItemDesc = listItem.getElementsByTagName("div")[2];
        let listItemDate = listItem.getElementsByTagName("div")[3];
        let listItemEdit = listItem.getElementsByTagName("img")[0];
        let listItemDelete = listItem.getElementsByTagName("img")[1];


        listItemTitle.style.display = "none"
        listItemDesc.style.display = "none"
        listItemDate.style.display = "none"
        listItemEdit.style.display = "none"
        listItemDelete.style.display = "none"

        let inputTitle = document.createElement("input");
        inputTitle.name = "editTaskTitle";
        inputTitle.maxLength = "35";
        inputTitle.required = "true";
        inputTitle.placeholder = listItemTitle.innerHTML;
        inputTitle.id = "editTaskTitle";
        listItem.insertBefore(inputTitle, listItemTitle)

        let inputDesc = document.createElement("input");
        inputDesc.name = "editTaskDescription";
        inputDesc.id = "editTaskDescription";
        inputDesc.maxLength = "35";
        inputDesc.placeholder = listItemDesc.innerHTML;
        listItem.insertBefore(inputDesc, listItemDesc);

        let inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.id = "editTaskDate";
        inputDate.placeholder = "Due Date"
        inputDate.autocomplete = "off";
        listItem.insertBefore(inputDate, listItemDate);

        let okayButton = document.createElement("img");
        okayButton.src = "img/check-solid.svg"
        listItem.insertBefore(okayButton, listItemEdit);

        let cancelButton = document.createElement("img");
        cancelButton.src = "img/ban-solid.svg";
        listItem.insertBefore(cancelButton, listItemDelete);

        okayButton.addEventListener("click", (e) => {
            for(let i in todoItems) {
                if(todoItems[i].title == listItemTitle.innerHTML && todoItems[i].description == listItemDesc.innerHTML && todoItems[i].date == listItemDate.innerHTML) {
                    if (inputTitle.value == "" && inputDesc.value == "") {
                        alert("You must fill all the blanks.")
                    }
                    else {
                        todoItems[i].title = inputTitle.value;
                        todoItems[i].description = inputDesc.value;
                        todoItems[i].date = inputDate.value;
                        listItemTitle.innerHTML = inputTitle.value;
                        listItemDesc.innerHTML = inputDesc.value;
                        listItemDate.innerHTML = inputDate.value;
                        inputTitle.remove();
                        inputDesc.remove();
                        inputDate.remove();
                        okayButton.remove();
                        cancelButton.remove();
                        listItemTitle.style.display = "inline"
                        listItemDesc.style.display = "inline"
                        listItemDate.style.display = "inline"
                        listItemEdit.style.display = "inline"
                        listItemDelete.style.display = "inline"
                        localStorage.setItem("todoItems", JSON.stringify(todoItems))
                    }
                }
            }
        })

        cancelButton.addEventListener("click", (e) => {
            inputTitle.remove();
            inputDesc.remove();
            inputDate.remove();
            okayButton.remove();
            cancelButton.remove();
            listItemTitle.style.display = "inline"
            listItemDesc.style.display = "inline"
            listItemDate.style.display = "inline"
            listItemEdit.style.display = "inline"
            listItemDelete.style.display = "inline"
        })
    }))
}