import { createTaskModal } from "./createTaskModal";
import { getTaskInputs } from "./getTaskInputs";
import { createTask } from "./createTask";
import { displayProjects } from "./displayProjects";
import { clearTaskInputs } from "./clearTaskInputs";
import { activeProject } from "..";
import { deleteTask } from "..";

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

  project.tasks.forEach((task, index) => {
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

    activeProjectTask.addEventListener("click", (event) => {
      if (event.target.classList.contains("deleteTaskBtn")) return;

      createTaskModal();
      populateModal(task);
    });

    deleteTaskBtn.addEventListener("click", () => {
      deleteTask(index);
      displayProjects();
      renderActiveProject(activeProject);
    });
  });

  createTaskBtn.addEventListener("click", () => {
    createTaskModal();

    document.querySelector(".createTaskBtn").style.display = "none";

    document.querySelector(".addTaskBtn").addEventListener("click", () => {
      const taskTitleInput = document.querySelector(".taskTitleInputField");
      const taskDueDateInput = document.querySelector(".dueDatePicker");

      if (!taskTitleInput.checkValidity()) {
        taskTitleInput.reportValidity();
        return;
      }

      if (!taskDueDateInput.checkValidity()) {
        taskDueDateInput.reportValidity();
        return;
      }

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

function populateModal(task) {
  const modal = document.querySelector(".activeProjectTaskModal");

  modal.querySelector(".taskTitleInputField").value = task.title;
  modal.querySelector(".taskDescriptionInputField").value = task.description;
  modal.querySelector(".dueDatePicker").value = task.dueDate;
  modal.querySelector("#priorityDropdown").value = task.priority;

  // hides add button and show update button instead
  modal.querySelector(".addTaskBtn").style.display = "none";

  let updateTaskBtn = document.querySelector(".updateTaskBtn");

  if (!updateTaskBtn) {
    updateTaskBtn = document.createElement("button");
    updateTaskBtn.classList.add("updateTaskBtn");
    updateTaskBtn.textContent = "Update";
    modal.append(updateTaskBtn);
  }

  updateTaskBtn.addEventListener("click", () => {
    const { getTaskTitle, getTaskDescription, getDueDate, getPriority } =
      getTaskInputs();

    task.title = getTaskTitle;
    task.description = getTaskDescription;
    task.dueDate = getDueDate;
    task.priority = getPriority;

    displayProjects();
    renderActiveProject(activeProject);
    modal.textContent = "";
  });
}
