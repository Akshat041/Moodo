import { createTaskModal } from "./createTaskModal";
import { getTaskInputs } from "./getTaskInputs";
import { createTask } from "./createTask";
import { displayProjects } from "./displayProjects";
import { clearTaskInputs } from "./clearTaskInputs";
import { activeProject } from "..";

export function renderActiveProject(project) {
  const mainContentContainer = document.querySelector(".mainContentContainer");

  if (mainContentContainer) {
    mainContentContainer.textContent = "";
  }

  const activeProjectTitle = document.createElement("h1");
  activeProjectTitle.classList.add("activeProjectTitle");

  const activeProjectDescription = document.createElement("p");
  activeProjectDescription.classList.add("activeProjectDescription");

  const activeProjectTaskContainer = document.createElement("div");
  activeProjectTaskContainer.classList.add("activeProjectTaskContainer");

  const activeProjectTaskModal = document.createElement("div");
  activeProjectTaskModal.classList.add("activeProjectTaskModal");

  const createTaskBtn = document.createElement("button");
  createTaskBtn.classList.add("createTaskBtn");

  activeProjectTitle.textContent = `${project.title}`;
  activeProjectDescription.textContent = `${project.description}`;
  createTaskBtn.textContent = "Add New Task";

  mainContentContainer.append(
    activeProjectTitle,
    activeProjectDescription,
    activeProjectTaskContainer,
    activeProjectTaskModal,
    createTaskBtn
  );

  // task event listener
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

      activeProject.addTask(task);

      displayProjects();
      clearTaskInputs();
    });
  });
}
