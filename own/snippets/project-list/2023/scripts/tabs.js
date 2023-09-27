const mainTabNavigation = document.querySelector(".main-tabs__navigation");
const subTabNavigation = document.querySelector(".sub-tabs__navigation");
const projectsListElement = document.querySelector(".projects__list");

function createMainTabs() {
    for (const mainTab in projectsList) {
        if (projectsList.hasOwnProperty(mainTab)) {
            const mainTabButton = document.createElement("button");
            mainTabButton.classList.add("main-tabs__button");
            mainTabButton.setAttribute("type", "button");

            const mainTabIconInnerHTML = projectsList[mainTab].icon;

            mainTabButton.innerHTML = `
                <div class="main-tabs__icon">${mainTabIconInnerHTML}</div>
                <h2 class="main-tabs__title">${mainTab}</h2>
            `;
            mainTabNavigation.appendChild(mainTabButton);

            mainTabButton.addEventListener("click", () => {
                projectsListElement.innerHTML = "";
                setActiveTab(mainTabButton, mainTabNavigation);
                createSubTabs(projectsList[mainTab].subTabs);
            });
        }
    }
}

function createSubTabs(subTabs) {
    subTabNavigation.innerHTML = "";

    for (const subTabItem in subTabs) {
        if (subTabs.hasOwnProperty(subTabItem)) {
            const subTabButton = document.createElement("button");
            subTabButton.classList.add("sub-tabs__button");
            subTabButton.setAttribute("type", "button");

            const subTabIconInnerHTML = subTabs[subTabItem].icon;

            subTabButton.innerHTML = `
                <div class="sub-tabs__icon">
                    ${subTabIconInnerHTML}
                </div>
                <h2 class="sub-tabs__title">${subTabItem}</h2>
            `;
            subTabNavigation.appendChild(subTabButton);

            subTabButton.addEventListener("click", () => {
                setActiveTab(subTabButton, subTabNavigation);
                outputProjects(subTabs[subTabItem].projects);
            });
        }
    }
}

function setActiveTab(tabButton, tabContainer) {
    const activeElements = tabContainer.querySelectorAll(".active");
    for (const element of activeElements) {
        element.classList.remove("active");
    }
    tabButton.classList.add("active");
}

function outputProjects(projects) {
    projectsListElement.innerHTML = "";

    for (const project of projects) {
        const projectItem = document.createElement("a");
        projectItem.href = project.link;
        projectItem.classList.add("projects__item");
        projectItem.style = project.customStyles;

        const projectIcon = document.createElement("img");
        projectIcon.src = project.icon;
        projectIcon.alt = "icon";
        projectIcon.classList.add("projects__icon");

        const projectTitle = document.createElement("h2");
        projectTitle.textContent = project.title;
        projectTitle.classList.add("projects__title");

        projectItem.appendChild(projectIcon);
        projectItem.appendChild(projectTitle);

        projectsListElement.appendChild(projectItem);
    }
}

createMainTabs();