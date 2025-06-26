import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { createTaskModal } from "./modules/createTaskModal";

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

displayProjects();
createTaskModal();

// date-fns
// import { addDays, format } from "date-fns";

// const date = new Date();
// const todayF = format(date, "dd/MM/yyyy");

// const tomorrow = addDays(date, 1);
// const tomorrowF = format(tomorrow, "dd/MM/yyyy");

// console.log(todayF);
// console.log(tomorrowF);
