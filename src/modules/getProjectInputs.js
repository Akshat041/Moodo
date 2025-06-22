export function getProjectInputs() {
  const getProjectTitle = document.querySelector(
    ".projectTitleInputField"
  ).value;

  const getProjectDescription = document.querySelector(
    ".projectDescriptionInputField"
  ).value;

  return { getProjectTitle, getProjectDescription };
}
