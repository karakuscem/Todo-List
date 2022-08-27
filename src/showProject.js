// Function for showing projects
export function showProjects(projectNames) {
    const projectSection = document.querySelector(".projectSection")
    const navItem = document.createElement("div");
    navItem.classList.add("navItem");
    projectSection.appendChild(navItem);

    const projectIcon = document.createElement("img");
    projectIcon.src = "img/bars-solid.svg";
    navItem.appendChild(projectIcon);

    const projectTitle = document.createElement("h1");
    projectTitle.textContent = projectNames.title;
    projectTitle.id = "projectButton";
    navItem.appendChild(projectTitle);
}