export function clearProjectInputs() {
  const projectTitleInputField = document.querySelector(
    ".projectTitleInputField"
  );

  const projectDescriptionInputField = document.querySelector(
    ".projectDescriptionInputField"
  );

  projectTitleInputField.value = "";
  projectDescriptionInputField.value = "";
}
