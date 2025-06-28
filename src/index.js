import { createProjectModal } from "./modules/createProjectModal";
import { addProject } from "./modules/addProject";
import { getProjectInputs } from "./modules/getProjectInputs";
import { createProject } from "./modules/createProject";
import { displayProjects } from "./modules/displayProjects";
import { createTaskModal } from "./modules/createTaskModal";
import { createTask } from "./modules/createTask";
import { getTaskInputs } from "./modules/getTaskInputs";
import { clearTaskInputs } from "./modules/clearTaskInputs";

export const myProjects = [];

const createNewProjectBtn = document.querySelector(".createNewProjectBtn");
const createTaskBtn = document.querySelector(".createTaskBtn");

createNewProjectBtn.addEventListener("click", () => {
  createProjectModal();

  document.querySelector(".addProjectBtn").addEventListener("click", () => {
    const { getProjectTitle, getProjectDescription } = getProjectInputs();

    const project = new createProject(getProjectTitle, getProjectDescription);

    currentProject = project;

    addProject(project);
    displayProjects();
  });
});

// task
createTaskBtn.addEventListener("click", () => {
  createTaskModal();

  document.querySelector(".addTaskBtn").addEventListener("click", () => {
    const { getTaskTitle, getTaskDescription, getDueDate, getPriority } =
      getTaskInputs();

    const task = new createTask(
      getTaskTitle,
      getTaskDescription,
      getDueDate,
      getPriority
    );

    currentProject.addTask(task);

    displayProjects();
    clearTaskInputs();
  });
});

const defaultProject = new createProject("Today", "What's the plan for today!");
addProject(defaultProject);

let currentProject = defaultProject;
displayProjects();
