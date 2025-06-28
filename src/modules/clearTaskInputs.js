export function clearTaskInputs() {
  const taskTitle = document.querySelector(".taskTitleInputField");

  const taskDescription = document.querySelector(".taskDescriptionInputField");

  const taskDueDate = document.querySelector(".dueDatePicker");

  const taskPriority = document.querySelector("#priorityDropdown");

  taskTitle.value = "";
  taskDescription.value = "";
  taskDueDate.value = "";
  taskPriority.value = "High";
}
