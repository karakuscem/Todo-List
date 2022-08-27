import { projectItems, projectListDiv } from ".";
import { showProjects } from "./showProject";
import { showProjectTasks } from "./showProjectTasks";

const newProjectButton = document.querySelectorAll("#addNewProject");
const projectButtons = document.querySelector("#addNew");
const projectSection = document.querySelector(".projectSection")
// Function for adding projects
export function addProject(){
    newProjectButton.forEach(btn => btn.addEventListener("click", (e) => {
        //Check how many project user have and won't let more than 5
        if(projectSection.childElementCount >= 5){
            alert("You cannot add more projects");
        }
        else {
            // Don't allow show two input
            projectListDiv.innerHTML = ""
            if(projectItems){
                projectItems.forEach(projectItem => {
                    showProjects(projectItem)
                });
            }
            // Add elements for adding project
            projectButtons.style.display = "none";
            const navItem = document.createElement("div");
            navItem.classList.add("navItem");
            projectSection.appendChild(navItem);

            const projectIcon = document.createElement("img");
            projectIcon.src = "img/bars-solid.svg";
            navItem.appendChild(projectIcon);
    
            const projectTitleInput = document.createElement("input");
            projectTitleInput.name = "addProjectTitle";
            projectTitleInput.id = "addProjectTitle";
            projectTitleInput.placeholder = "Project Title";
            projectTitleInput.maxLength = "10";
            projectTitleInput.required = "true";
            navItem.appendChild(projectTitleInput);

            const projectOkay = document.createElement("img");
            projectOkay.id = "navOkay";
            projectOkay.src = "img/check-solid.svg";
            navItem.appendChild(projectOkay);

            const projectCancel = document.createElement("img");
            projectCancel.id = "navCancel";
            projectCancel.src = "img/ban-solid.svg";
            navItem.appendChild(projectCancel);
            // If user click okay, add storage and show project items
            projectOkay.addEventListener("click", (e) => {
                if(projectTitleInput.value == ""){
                    alert("You must fill the title.")
                }
                else if(projectTitleInput.value.toUpperCase() in localStorage){
                    alert("You cannot add same project twice.")
                }
                else {
                    const projectTitle = document.createElement("h1");
                    projectTitle.innerHTML = projectTitleInput.value;
                    const projectStorageItems = {
                        title: projectTitleInput.value.toUpperCase()
                    }
                    if (!projectItems) {
                        localStorage.setItem("projectItems", JSON.stringify([]));
                        projectItems = JSON.parse(localStorage.getItem("projectItems"));
                    } 
                    projectItems.push(projectStorageItems);
                    projectTitle.classList.add("button");
                    localStorage.setItem("projectItems", JSON.stringify(projectItems));
                    localStorage.setItem(`${projectTitle.innerHTML.toUpperCase()}`, JSON.stringify([]))
                    projectTitleInput.remove();
                    projectOkay.remove();
                    projectCancel.remove();
                    projectListDiv.innerHTML = "";
                    projectItems.forEach(projectItem => {
                        showProjects(projectItem)
                        showProjectTasks();
                    });
                    projectButtons.style.display = "flex";
                }
            })
            // If user click cancel do nothing and show existing projects.
            projectCancel.addEventListener("click", (e) => {
                navItem.remove();
                projectButtons.style.display = "flex";
            })
        }
    }))
}