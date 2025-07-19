export function createTaskModal() {
  // task title
  const taskTitleInputField = document.createElement("input");
  taskTitleInputField.classList.add("taskTitleInputField");
  taskTitleInputField.placeholder = "Task title";
  taskTitleInputField.required = true;

  // task description
  const taskDescriptionInputField = document.createElement("input");
  taskDescriptionInputField.classList.add("taskDescriptionInputField");
  taskDescriptionInputField.placeholder = "Task Description";

  // set due date
  const dueDatePicker = document.createElement("input");
  dueDatePicker.classList.add("dueDatePicker");
  dueDatePicker.type = "date";
  dueDatePicker.required = true;

  // set priority
  const priorityDropdown = document.createElement("select");
  priorityDropdown.id = "priorityDropdown";
  priorityDropdown.name = "priorityDropdown";

  const priorityHigh = document.createElement("option");
  priorityHigh.classList.add("priorityHigh");
  priorityHigh.textContent = "High";

  const priorityMedium = document.createElement("option");
  priorityMedium.classList.add("priorityMedium");
  priorityMedium.textContent = "Medium";

  const priorityLow = document.createElement("option");
  priorityLow.classList.add("priorityLow");
  priorityLow.textContent = "Low";

  // add task btn
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add Task";

  const taskModal = document.querySelector(".activeProjectTaskModal");

  priorityDropdown.append(priorityHigh, priorityMedium, priorityLow);

  taskModal.append(
    taskTitleInputField,
    taskDescriptionInputField,
    dueDatePicker,
    priorityDropdown,
    addTaskBtn
  );
}
