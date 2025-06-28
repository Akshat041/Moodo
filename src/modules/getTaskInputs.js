export function getTaskInputs() {
  const getTaskTitle = document.querySelector(".taskTitleInputField").value;
  console.log(getTaskTitle);

  const getTaskDescription = document.querySelector(
    ".taskDescriptionInputField"
  ).value;
  console.log(getTaskDescription);

  const getDueDate = document.querySelector(".dueDatePicker").value;
  console.log(getDueDate);

  const getPriority = document.querySelector("#priorityDropdown").value;
  console.log(getPriority);

  return {
    getTaskTitle,
    getTaskDescription,
    getDueDate,
    getPriority,
  };
}
