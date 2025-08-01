import "../src/styles/main.css";
import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { clearProjectInputs } from "./modules/clearProjectInputs";
import { renderActiveProject } from "./modules/renderActiveProject";
import { createTask } from "./modules/createTask";

export function saveDataToLocalStorage() {
  localStorage.setItem("myProjects", JSON.stringify(restoredProjects));
}

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("myProjects"));
}

export const parsedProjects = getDataFromLocalStorage() || [];

export let activeProject;

// const parsedProjects = getDataFromLocalStorage();

export const restoredProjects = parsedProjects.map((projectData) => {
  const project = new createProject(projectData.title, projectData.description);

  project.tasks = projectData.tasks.map((task) => {
    return new createTask(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.taskCompleted
    );
  });

  return project;
});

if (restoredProjects.length === 0) {
  const defaultProject = new createProject(
    "Inbox",
    "All uncategorized tasks go here."
  );
  addProject(defaultProject);

  activeProject = defaultProject;
  displayProjects();
  renderActiveProject(activeProject);

  saveDataToLocalStorage();
} else {
  activeProject = restoredProjects[0];
  displayProjects();
  renderActiveProject(activeProject);
}

export function getActiveProject() {
  return activeProject;
}

export function setActiveProject(p) {
  activeProject = p;
}

function handleCreateNewProjBtnEvent() {
  const createNewProjectBtn = document.querySelector(".createNewProjectBtn");

  createNewProjectBtn.addEventListener("click", () => {
    // remove existing modal to prevent multiple modals
    const existingModal = document.querySelector(".myProjectModal");
    if (existingModal) existingModal.innerHTML = "";

    createProjectModal();

    const addProjectBtn = document.querySelector(".addProjectBtn");

    addProjectBtn.addEventListener("click", () => {
      const { getProjectTitle, getProjectDescription } = getProjectInputs();

      const project = new createProject(getProjectTitle, getProjectDescription);

      // sets project to active to only newly create project
      activeProject = project;

      addProject(activeProject);
      displayProjects();
      clearProjectInputs();
      renderActiveProject(activeProject);

      document.querySelector(".myProjectModal").textContent = "";

      saveDataToLocalStorage();
    });
  });
}
handleCreateNewProjBtnEvent();

export function deleteProject(index) {
  restoredProjects.splice(index, 1);
  saveDataToLocalStorage();
}

export function deleteTask(index) {
  activeProject.tasks.splice(index, 1);

  saveDataToLocalStorage();
}
