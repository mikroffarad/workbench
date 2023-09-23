const projectsList = {
    "Single Pages": {
        "icon": `<i class="fa-solid fa-file"></i>`,
        "subTabs": {
            "Made by Tutorials": {
                "icon": `<i class="fa-brands fa-youtube"></i>`,
                "projects": [
                    {
                        "name": "проєкт1"
                    },
                    {
                        "name": "проєкт2"
                    },
                    {
                        "name": "проєкт3"
                    },
                    {
                        "name": "проєкт4"
                    },
                    {
                        "name": "проєкт5"
                    },
                ]
            },
            "Made my own": {
                "icon": `<i class="fa-solid fa-fingerprint"></i>`,
                "projects": [
                    {
                        "name": "проєкт6"
                    },
                    {
                        "name": "проєкт7"
                    },
                    {
                        "name": "проєкт8"
                    },
                    {
                        "name": "проєкт9"
                    },
                    {
                        "name": "проєкт10"
                    },
                ]
            }
        }
    },
    "Multi Pages": {
        "icon": `<i class="fa-solid fa-sitemap"></i>`,
        "subTabs": {
            "Made by Tutorials": {
                "icon": `<i class="fa-brands fa-youtube"></i>`,
                "projects": [
                    {
                        "name": "проєкт11"
                    },
                    {
                        "name": "проєкт12"
                    },
                    {
                        "name": "проєкт13"
                    },
                    {
                        "name": "проєкт14"
                    },
                    {
                        "name": "проєкт15"
                    },
                ]
            },
            "Made my own": {
                "icon": `<i class="fa-solid fa-fingerprint"></i>`,
                "projects": [
                    {
                        "name": "проєкт16"
                    },
                    {
                        "name": "проєкт17"
                    },
                    {
                        "name": "проєкт18"
                    },
                    {
                        "name": "проєкт19"
                    },
                    {
                        "name": "проєкт20"
                    },
                ]
            }
        }
    },
    "Web Apps": {
        "icon": `<i class="fa-solid fa-window-restore"></i>`,
        "subTabs": {
            "Made by Tutorials": {
                "icon": `<i class="fa-brands fa-youtube"></i>`,
                "projects": [
                    {
                        "name": "проєкт21"
                    },
                    {
                        "name": "проєкт22"
                    },
                    {
                        "name": "проєкт23"
                    },
                    {
                        "name": "проєкт24"
                    },
                    {
                        "name": "проєкт25"
                    },
                ]
            },
            "Made my own": {
                "icon": `<i class="fa-solid fa-fingerprint"></i>`,
                "projects": [
                    {
                        "name": "проєкт26"
                    },
                    {
                        "name": "проєкт27"
                    },
                    {
                        "name": "проєкт28"
                    },
                    {
                        "name": "проєкт29"
                    },
                    {
                        "name": "проєкт30"
                    },
                ]
            }
        }
    },
}

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
        const projectItem = document.createElement("li");
        projectItem.textContent = project.name;
        projectsListElement.appendChild(projectItem);
    }
}

createMainTabs();