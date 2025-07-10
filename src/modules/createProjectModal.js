export function createProjectModal() {
  const projectTitleInputField = document.createElement("input");
  projectTitleInputField.classList.add("projectTitleInputField");
  projectTitleInputField.placeholder = "Project title";

  const projectDescriptionInputField = document.createElement("input");
  projectDescriptionInputField.classList.add("projectDescriptionInputField");
  projectDescriptionInputField.placeholder = "Project Description";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProjectBtn");
  addProjectBtn.textContent = "Add Project";

  const myProjectModal = document.querySelector(".myProjectModal");

  myProjectModal.append(
    projectTitleInputField,
    projectDescriptionInputField,
    addProjectBtn
  );
}
