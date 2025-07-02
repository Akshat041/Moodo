export function getTaskInputs() {
  const getTaskTitle = document.querySelector(".taskTitleInputField").value;

  const getTaskDescription = document.querySelector(
    ".taskDescriptionInputField"
  ).value;

  const getDueDate = document.querySelector(".dueDatePicker").value;

  const getPriority = document.querySelector("#priorityDropdown").value;

  return {
    getTaskTitle,
    getTaskDescription,
    getDueDate,
    getPriority,
  };
}
