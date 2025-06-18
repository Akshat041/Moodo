const body = document.querySelector("body");

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const myProjects = document.createElement("div");
myProjects.classList.add("myProjects");

const myProjectsHeading = document.createElement("h1");
myProjectsHeading.classList.add("myProjectsHeading");

const createNewProjectBtn = document.createElement("button");
createNewProjectBtn.classList.add("createNewProjectBtn");

// a project
const aProject = document.createElement("div");
aProject.classList.add("aProject");

const projectDefault = document.createElement("button");
projectDefault.classList.add("defaultProjectBtn");

const projectTaskCount = document.createElement("p");
projectTaskCount.classList.add("projectTaskCount");

const deleteProjectBtn = document.createElement("button");
deleteProjectBtn.classList.add("deleteProject");

// creates sidebar
export default function createSidebar() {
  myProjectsHeading.textContent = "My Projects";
  createNewProjectBtn.textContent = "Create New Project";
  projectDefault.textContent = "Today";
  projectTaskCount.textContent = "0";
  deleteProjectBtn.textContent = "Delete"; // add icon later

  aProject.append(projectDefault, projectTaskCount, deleteProjectBtn);
  myProjects.append(myProjectsHeading, createNewProjectBtn, aProject);
  sidebar.append(myProjects);
  body.append(sidebar);
}
