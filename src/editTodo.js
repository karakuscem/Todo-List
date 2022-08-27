import { todoItems } from ".";

// Function for editing todo
export function editTodo(){
    const editIcons = document.querySelectorAll(".taskEditIcon");
    // Add event listener
    editIcons.forEach(edit => edit.addEventListener("click", (e) => {
        // Select items can be edited
        let listItem = e.target.parentElement
        let listItemTitle = listItem.getElementsByTagName("div")[1];
        let listItemDesc = listItem.getElementsByTagName("div")[2];
        let listItemDate = listItem.getElementsByTagName("div")[3];
        let listItemEdit = listItem.getElementsByTagName("img")[0];
        let listItemDelete = listItem.getElementsByTagName("img")[1];

        // Hide items
        listItemTitle.style.display = "none"
        listItemDesc.style.display = "none"
        listItemDate.style.display = "none"
        listItemEdit.style.display = "none"
        listItemDelete.style.display = "none"

        //Show input for user to edit selected item
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

        // If okay button clicked, insert edited version to storage and html
        okayButton.addEventListener("click", (e) => {
            let pageTitle = document.querySelector(".pageTitle");
            let projectStorage;
            // Check if user in project page
            if(pageTitle){
                projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
            }
            // If user in project page edit project todo
            if(pageTitle && pageTitle.innerHTML in localStorage){
                for (let i in projectStorage) {
                    if(projectStorage[i].title == listItemTitle.innerHTML && projectStorage[i].description == listItemDesc.innerHTML && projectStorage[i].date == listItemDate.innerHTML){
                        // Check if all blanks are filled
                        if (inputTitle.value == "" || inputDesc.value == "") {
                            alert("You must fill all the blanks.")
                        }
                        else {
                            projectStorage[i].title = inputTitle.value;
                            projectStorage[i].description = inputDesc.value;
                            projectStorage[i].date = inputDate.value;
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
                            localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify(projectStorage)) 
                        }
                    }
                }
            }
            // If user not in project page edit default storage
            else if (!pageTitle) {
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
            }
        })
        // If user click on cancel button, do nothing, remove input fields and show existing items
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