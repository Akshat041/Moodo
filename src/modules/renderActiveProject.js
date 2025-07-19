import { createTaskModal } from "./createTaskModal";
import { getTaskInputs } from "./getTaskInputs";
import { createTask } from "./createTask";
import { displayProjects } from "./displayProjects";
import { clearTaskInputs } from "./clearTaskInputs";
import { activeProject } from "..";

export function renderActiveProject(project) {
  const mainContentContainer = document.querySelector(".mainContentContainer");

  mainContentContainer.textContent = "";

  const activeProjectTitle = document.createElement("h1");
  activeProjectTitle.classList.add("activeProjectTitle");

  const activeProjectDescription = document.createElement("p");
  activeProjectDescription.classList.add("activeProjectDescription");

  const activeProjectTasksContainer = document.createElement("div");
  activeProjectTasksContainer.classList.add("activeProjectTasksContainer");

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
    activeProjectTasksContainer,
    activeProjectTaskModal,
    createTaskBtn
  );

  project.tasks.forEach((task) => {
    const activeProjectTasksContainer = document.querySelector(
      ".activeProjectTasksContainer"
    );

    const activeProjectTask = document.createElement("div");
    activeProjectTask.classList.add("activeProjectTask");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.classList.add("taskCheckbox");
    taskCheckbox.type = "checkbox";

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("taskTitle");

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add("taskDueDate");

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("deleteTaskBtn");

    taskTitle.textContent = `${task.title}`;
    taskDueDate.textContent = `${task.dueDate}`;
    deleteTaskBtn.textContent = "Delete";

    activeProjectTask.append(
      taskCheckbox,
      taskTitle,
      taskDueDate,
      deleteTaskBtn
    );
    activeProjectTasksContainer.append(activeProjectTask);
  });

  createTaskBtn.addEventListener("click", () => {
    createTaskModal();

    document.querySelector(".createTaskBtn").style.display = "none";

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
      console.log(activeProject.title);

      displayProjects();
      clearTaskInputs();
      renderActiveProject(activeProject);

      document.querySelector(".activeProjectTaskModal").textContent = "";
    });
  });
}
