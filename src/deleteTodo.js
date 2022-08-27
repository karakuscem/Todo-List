import { todoItems } from ".";

// Function for delete todo.
export function deleteTodo(){
    let dltIcons = document.querySelectorAll(".taskDeleteIcon")
    let pageTitle = document.querySelector(".pageTitle");
    // Add event listener to all delete buttons
    dltIcons.forEach(icon => icon.addEventListener("click", (e) => {
        let listItem = e.target.parentElement
        listItem.remove();
        //Select delete button's sibling (todo title)
        let listItemText = listItem.getElementsByTagName("div")[1].innerHTML;
        // If user in project page delete todo item in project page
        if(pageTitle && pageTitle.innerHTML in localStorage){
            let projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
            projectStorage = projectStorage.filter(td => td.title != listItemText);
            localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify(projectStorage));
        }
        // If user not in project page delete todo item in default storage
        else if (!pageTitle) {
            todoItems = todoItems.filter(td => td.title != listItemText);
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
        }
     }))
}
