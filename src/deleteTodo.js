import { todoItems } from ".";
export function deleteTodo(){
    let dltIcons = document.querySelectorAll(".taskDeleteIcon")
    let pageTitle = document.querySelector(".pageTitle");
    dltIcons.forEach(icon => icon.addEventListener("click", (e) => {
        let listItem = e.target.parentElement
        listItem.remove();
        let listItemText = listItem.getElementsByTagName("div")[1].innerHTML;
        if(pageTitle && pageTitle.innerHTML in localStorage){
            let projectStorage = JSON.parse(localStorage.getItem(`${pageTitle.innerHTML}`))
            projectStorage = projectStorage.filter(td => td.title != listItemText);
            localStorage.setItem(`${pageTitle.innerHTML}`, JSON.stringify(projectStorage));
        }
        else if (!pageTitle) {
            todoItems = todoItems.filter(td => td.title != listItemText);
            localStorage.setItem("todoItems", JSON.stringify(todoItems));
        }
     }))
}
