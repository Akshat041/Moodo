import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { clearProjectInputs } from "./modules/clearProjectInputs";
import { renderActiveProject } from "./modules/renderActiveProject";

export const myProjects = [];

const defaultProject = new createProject(
  "Inbox",
  "All uncategorized tasks go here."
);
addProject(defaultProject);

export let activeProject = defaultProject;
displayProjects();
renderActiveProject(activeProject);

export function getActiveProject() {
  return activeProject;
}

export function setActiveProject(p) {
  activeProject = p;
}

function handleCreateNewProjBtnEvent() {
  const createNewProjectBtn = document.querySelector(".createNewProjectBtn");

  createNewProjectBtn.addEventListener("click", () => {
    createProjectModal();

    document.querySelector(".addProjectBtn").addEventListener("click", () => {
      const { getProjectTitle, getProjectDescription } = getProjectInputs();

      const project = new createProject(getProjectTitle, getProjectDescription);

      // sets project to active to only newly create object
      activeProject = project;

      addProject(activeProject);
      displayProjects();
      clearProjectInputs();
      renderActiveProject(activeProject);
    });
  });
}

export function deleteProject(index) {
  myProjects.splice(index, 1);
}

handleCreateNewProjBtnEvent();
