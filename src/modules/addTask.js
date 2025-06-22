import { body } from "./sidebar";

const taskContainer = document.createElement("div");
taskContainer.classList.add("taskContainer");

const taskForm = document.createElement("form");
taskForm.classList.add("taskForm");

const taskInputField = document.createElement("div");
taskInputField.classList.add("taskInputField");

const taskTitleContainer = document.createElement("div");
taskTitleContainer.classList.add("taskTitleContainer");

// task title
const taskTitleLabel = document.createElement("label");
taskTitleLabel.htmlFor = "taskTitle";
taskTitleLabel.textContent = "Title";

const taskTitleInput = document.createElement("input");
taskTitleInput.type = "text";
taskTitleInput.id = "taskTitle";

// task details
const taskDetailsContainer = document.createElement("div");
taskDetailsContainer.classList.add("taskDetailsContainer");

const taskDetailsLabel = document.createElement("label");
taskDetailsLabel.htmlFor = "taskDetail";
taskDetailsLabel.textContent = "Details";

const taskDetailsInput = document.createElement("input");
taskDetailsInput.type = "text";
taskDetailsInput.id = "taskDetails";

// task info - due date, priority
const taskInfoSetters = document.createElement("div");
taskInfoSetters.classList.add("taskInfoSetters");

// due date
const setDueDateContainer = document.createElement("div");
setDueDateContainer.classList.add("setDueDateContainer");

// due date - label, input
const setDueDateLabel = document.createElement("label");
setDueDateLabel.htmlFor = "setDueDate";
setDueDateLabel.textContent = "Due Date";

const setDueDateInput = document.createElement("input");
setDueDateInput.type = "text";
setDueDateInput.id = "setDueDate";

// priority
const setPriority = document.createElement("div");
setPriority.classList.add("setPriority");

// proiority - label; (dropdown) - select, option
const taskPriorityLabel = document.createElement("label");
taskPriorityLabel.htmlFor = "taskPriority";
taskPriorityLabel.textContent = "Priority";

// select
const taskPrioritySelect = document.createElement("select");
setDueDateInput.id = "taskPriority";

// option
const taskPriorityOptionHigh = document.createElement("option");
taskPriorityOptionHigh.textContent = "High";

const taskPriorityOptionMedium = document.createElement("option");
taskPriorityOptionMedium.textContent = "Medium";

const taskPriorityOptionLow = document.createElement("option");
taskPriorityOptionLow.textContent = "Low";

// form buttons
const formBtns = document.createElement("div");
formBtns.classList.add("formBtns");

const formCancelBtn = document.createElement("button");
formCancelBtn.classList.add("formCancelBtn");
formCancelBtn.textContent = "Cancel";

const formDeleteBtn = document.createElement("button");
formDeleteBtn.classList.add("formDeleteBtn");
formDeleteBtn.textContent = "Delete";

const formAddThisTaskBtn = document.createElement("button");
formAddThisTaskBtn.classList.add("formAddThisTaskBtn");
formAddThisTaskBtn.textContent = "Add Task";

// appending
taskTitleContainer.append(taskTitleLabel, taskTitleInput);
taskDetailsContainer.append(taskDetailsLabel, taskDetailsInput);
setDueDateContainer.append(setDueDateLabel, setDueDateInput);

taskPrioritySelect.append(
  taskPriorityOptionHigh,
  taskPriorityOptionMedium,
  taskPriorityOptionLow
);
setPriority.append(taskPriorityLabel, taskPrioritySelect);

formBtns.append(formCancelBtn, formDeleteBtn, formAddThisTaskBtn);

taskInfoSetters.append(setDueDateContainer, setPriority, formBtns);

taskInputField.append(taskTitleContainer, taskDetailsContainer);

taskForm.append(taskInputField, taskInfoSetters);

export default function createTaskForm() {
  taskContainer.append(taskForm);
  body.appendChild(taskContainer);
}
