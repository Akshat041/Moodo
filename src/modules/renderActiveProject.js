import { createTaskModal } from "./createTaskModal";
import { getTaskInputs } from "./getTaskInputs";
import { createTask } from "./createTask";
import { displayProjects } from "./displayProjects";
import { clearTaskInputs } from "./clearTaskInputs";
import { activeProject, saveDataToLocalStorage } from "..";
import { deleteTask } from "..";
import { add } from "date-fns";

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
  activeProjectTaskModal.classList.add("activeProjectTaskModal", "hidden");

  const createTaskBtn = document.createElement("button");
  createTaskBtn.classList.add("createTaskBtn");

  activeProjectTitle.textContent = `${project.title}`;
  activeProjectDescription.textContent = `${project.description}`;

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
    activeProjectTask.style.cursor = "pointer";

    const taskCheckbox = document.createElement("input");
    taskCheckbox.classList.add("taskCheckbox");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.taskCompleted;

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("taskTitle");

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add("taskDueDate");

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("deleteTaskBtn");

    taskTitle.textContent = `${task.title}`;
    taskDueDate.textContent = `${task.dueDate}`;
    deleteTaskBtn.textContent = "Delete";

    if (task.priority === "High") {
      activeProjectTask.classList.add("priority-high");
    } else if (task.priority === "Medium") {
      activeProjectTask.classList.add("priority-medium");
    } else if (task.priority === "Low") {
      activeProjectTask.classList.add("priority-low");
    }

    activeProjectTask.append(
      taskCheckbox,
      taskTitle,
      taskDueDate,
      deleteTaskBtn
    );
    activeProjectTasksContainer.append(activeProjectTask);

    taskCheckbox.addEventListener("click", (e) => {
      e.stopPropagation();
      task.taskCompleted = taskCheckbox.checked;
      saveDataToLocalStorage();
      renderActiveProject(activeProject);
    });

    activeProjectTask.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("deleteTaskBtn") ||
        event.target.classList.contains("taskCheckbox")
      )
        return;

      document.querySelector(".createTaskBtn").style.display = "none";

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
    document
      .querySelector(".activeProjectTaskModal")
      .classList.remove("hidden");
    document.body.classList.add("modal-active");

    createTaskModal();

    setTimeout(() => {
      activeProjectTaskModal.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);

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

      activeProject.tasks.push(task);

      displayProjects();
      clearTaskInputs();
      renderActiveProject(activeProject);

      document.querySelector(".activeProjectTaskModal").textContent = "";

      saveDataToLocalStorage();
    });
  });
}

function populateModal(task) {
  const modal = document.querySelector(".activeProjectTaskModal");
  modal.textContent = "";

  modal.classList.remove("hidden");

  createTaskModal();

  modal.querySelector(".taskTitleInputField").value = task.title;
  modal.querySelector(".taskDescriptionInputField").value = task.description;
  modal.querySelector(".dueDatePicker").value = task.dueDate;
  modal.querySelector("#priorityDropdown").value = task.priority;

  // remove any previous 'Add Task' button, if needed
  const addBtn = modal.querySelector(".addTaskBtn");
  if (addBtn) addBtn.remove();

  // remove any previous 'update' button
  const oldUpdateBtn = modal.querySelector(".updateTaskBtn");
  if (oldUpdateBtn) oldUpdateBtn.remove();

  const updateTaskBtn = document.createElement("button");
  updateTaskBtn.classList.add("updateTaskBtn");
  updateTaskBtn.textContent = "Update";
  modal.append(updateTaskBtn);

  updateTaskBtn.addEventListener("click", () => {
    const { getTaskTitle, getTaskDescription, getDueDate, getPriority } =
      getTaskInputs();

    task.title = getTaskTitle;
    task.description = getTaskDescription;
    task.dueDate = getDueDate;
    task.priority = getPriority;

    saveDataToLocalStorage();
    displayProjects();
    renderActiveProject(activeProject);
    modal.textContent = "";
  });
}
