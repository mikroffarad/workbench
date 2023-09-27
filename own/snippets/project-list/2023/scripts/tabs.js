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
        projectsListElement.innerHTML += `
            <div class="projects__item" style="${project.customStyles}">
                <div class="projects__about">
                    <img class="projects__icon" src="${project.icon}" alt="icon">
                    <h2 class="projects__title">${project.title}</h2>
                </div>
                <nav class="projects__link-list">
                    <a class="projects__link-item" href="${project.linkToPage}">Page</a>
                    <a class="projects__link-item" href="${project.linkToSourceCode}">Source Code & Details</a>
                </nav>
            </div>
        `;
    }
}


createMainTabs();