import { projectItems, projectListDiv } from ".";
import { showProjects } from "./showProject";


// Function for delete project.
export function editProject(){
    let editProject = document.querySelectorAll("#projectEdit")
    // Add event listener to all delete buttons
    editProject.forEach(icon => icon.addEventListener("click", (e) => {
        let listItem = e.target.parentElement
        //Select delete button's siblings
        let listItemTitle = listItem.getElementsByTagName("h1")[0];
        let listItemEdit = listItem.getElementsByTagName("img")[1];
        let listItemDelete = listItem.getElementsByTagName("img")[2];
        let listItemTitleText = listItemTitle.innerHTML;
        // Hide them
        listItemTitle.style.display = "none";
        listItemDelete.style.display = "none";
        listItemEdit.style.display = "none";

        // Get input from user
        const projectTitleInput = document.createElement("input");
        projectTitleInput.name = "editProjectTitle";
        projectTitleInput.id = "editProjectTitle";
        projectTitleInput.placeholder = listItemTitleText;
        projectTitleInput.maxLength = "10";
        projectTitleInput.required = "true";
        listItem.appendChild(projectTitleInput);

        const projectOkay = document.createElement("img");
        projectOkay.id = "navOkay";
        projectOkay.src = "img/check-solid.svg";
        listItem.appendChild(projectOkay);

        const projectCancel = document.createElement("img");
        projectCancel.id = "navCancel";
        projectCancel.src = "img/ban-solid.svg";
        listItem.appendChild(projectCancel);

        // If okay button clicked, change html and local storage
        projectOkay.addEventListener("click", (e) => {
            if(projectTitleInput.value == ""){
                alert("You must fill the title.")
            }
            else if(projectTitleInput.value.toUpperCase() in localStorage){
                alert("You cannot add same project twice.")
            }
            else {
                let newStorage = [];
                let oldStorage = JSON.parse(localStorage.getItem(`${listItemTitleText.toUpperCase()}`));
                console.log(oldStorage);
                if(oldStorage == "null"){newStorage = []}
                else {oldStorage.forEach(item => {
                    newStorage.push(item);
                })}
                localStorage.setItem(`${projectTitleInput.value.toUpperCase()}`, JSON.stringify(newStorage));
                localStorage.removeItem(`${listItemTitleText}`);
                listItemTitleText = projectTitleInput.value;
                listItemTitle.style.display = "inline";
                listItemDelete.style.display = "inline";
                listItemEdit.style.display = "inline";
                projectTitleInput.remove();
                projectOkay.remove();
                projectCancel.remove();
                projectItems = projectItems.forEach(item => {
                    if(item.title == listItemTitle.innerHTML){
                        item.title = projectTitleInput.value.toUpperCase();
                        localStorage.setItem("projectItems", JSON.stringify(projectItems))
                    }
                    projectListDiv.innerHTML = "";
                    projectItems.forEach(item => {
                        showProjects(item)
                    });
                })
            }
        })

        projectCancel.addEventListener("click", (e) => {
            listItemTitle.style.display = "inline";
            listItemDelete.style.display = "inline";
            listItemEdit.style.display = "inline";
            projectTitleInput.remove();
            projectOkay.remove();
            projectCancel.remove();
        })
     }))
}
