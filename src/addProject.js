import { projectItems, projectListDiv } from ".";
import { showProjects } from "./showProject";

const newProjectButton = document.querySelectorAll("#addNewProject");
const projectButtons = document.querySelector("#addNew");
const projectSection = document.querySelector(".projectSection")

export function addProject(){
    newProjectButton.forEach(btn => btn.addEventListener("click", (e) => {
        if(projectSection.childElementCount >= 5){
            alert("You cannot add more projects");
        }
        else {
            projectListDiv.innerHTML = "";
            projectItems.forEach(projectItem => {
                showProjects(projectItem)
            });
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
            projectTitleInput.maxLength = "15";
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
            projectOkay.addEventListener("click", (e) => {
                if(projectTitleInput.value == ""){
                    alert("You must fill the title.")
                }
                else {
                    const projectTitle = document.createElement("h1");
                    projectTitle.innerHTML = projectTitleInput.value;
                    projectTitle.classList.add("button");
                    const projectStorageItems = {
                        title: projectTitleInput.value
                    }
                    projectItems.push(projectStorageItems);
                    localStorage.setItem("projectItems", JSON.stringify(projectItems));
                    projectTitleInput.remove();
                    projectOkay.remove();
                    projectCancel.remove();
                    projectListDiv.innerHTML = "";
                    projectItems.forEach(projectItem => {
                        showProjects(projectItem)
                    });
                    projectButtons.style.display = "flex";
                }
            })
            projectCancel.addEventListener("click", (e) => {
                navItem.remove();
                projectButtons.style.display = "flex";
            })
        }
    }))
}