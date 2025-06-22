// function createTask(title, description, due_date, priority) {
//   return { title, description, due_date, priority };
// }

// function displayProjects() {
//   myProjects.forEach((project) => {
//     console.log(project.title);
//   });
// }

// should only contain event listeners and not the functionality functions
import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";

export const myProjects = [];
const createNewProjectBtn = document.querySelector(".createNewProjectBtn");

createNewProjectBtn.addEventListener("click", () => {
  createProjectModal();

  document.querySelector(".addProjectBtn").addEventListener("click", () => {
    const { getProjectTitle, getProjectDescription } = getProjectInputs();

    const project = new createProject(getProjectTitle, getProjectDescription);

    addProject(project);
    displayProjects();
  });
});

const defaultProject = new createProject("Today", "What's the plan for today!");
addProject(defaultProject);

myProjects.forEach((project) => {
  console.log(project.title);
});
