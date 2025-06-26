import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { createTaskModal } from "./modules/createTaskModal";
import { createTask } from "./modules/createTask";

export const myProjects = [];
const createNewProjectBtn = document.querySelector(".createNewProjectBtn");
const createTaskBtn = document.querySelector(".createTaskBtn");

createNewProjectBtn.addEventListener("click", () => {
  createProjectModal();

  document.querySelector(".addProjectBtn").addEventListener("click", () => {
    const { getProjectTitle, getProjectDescription } = getProjectInputs();

    const project = new createProject(getProjectTitle, getProjectDescription);

    addProject(project);
    displayProjects();
  });
});

createTaskBtn.addEventListener("click", () => {
  createTaskModal();
});

const defaultProject = new createProject("Today", "What's the plan for today!");
addProject(defaultProject);

displayProjects();

// date-fns
// import { addDays, format } from "date-fns";

// const date = new Date();
// const todayF = format(date, "dd/MM/yyyy");

// const tomorrow = addDays(date, 1);
// const tomorrowF = format(tomorrow, "dd/MM/yyyy");

// console.log(todayF);
// console.log(tomorrowF);
