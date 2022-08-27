import { projectItems } from ".";

// Function for delete todo.
export function deleteProject(){
    let projectDelete = document.querySelectorAll("#projectDelete")
    // Add event listener to all delete buttons
    projectDelete.forEach(icon => icon.addEventListener("click", (e) => {
        let listItem = e.target.parentElement
        //Select delete button's sibling (todo title)
        let listItemText = listItem.getElementsByTagName("h1")[0].innerHTML;
        projectItems = projectItems.filter(project => project.title != listItemText)
        localStorage.removeItem(`${listItemText}`);
        localStorage.setItem("projectItems", JSON.stringify(projectItems));
        listItem.remove();
     }))
}
