import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { clearProjectInputs } from "./modules/clearProjectInputs";
import { renderActiveProject } from "./modules/renderActiveProject";

export const myProjects = [];

const defaultProject = new createProject("Today", "What's the plan for today!");
addProject(defaultProject);

export let activeProject = defaultProject;
displayProjects();
renderActiveProject(activeProject);

const createNewProjectBtn = document.querySelector(".createNewProjectBtn");

createNewProjectBtn.addEventListener("click", () => {
  createProjectModal();

  document.querySelector(".addProjectBtn").addEventListener("click", () => {
    const { getProjectTitle, getProjectDescription } = getProjectInputs();

    const project = new createProject(getProjectTitle, getProjectDescription);

    activeProject = project;

    addProject(activeProject);
    displayProjects();
    clearProjectInputs();
    renderActiveProject(activeProject);
  });
});

// displayTasks();
