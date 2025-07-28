export function createProjectModal() {
  const myProjectModal = document.querySelector(".myProjectModal");

  const projectTitleInputField = document.createElement("input");
  projectTitleInputField.classList.add("projectTitleInputField");
  projectTitleInputField.placeholder = "Project title";

  const projectDescriptionInputField = document.createElement("input");
  projectDescriptionInputField.classList.add("projectDescriptionInputField");
  projectDescriptionInputField.placeholder = "Project Description";

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProjectBtn");
  addProjectBtn.textContent = "Add Project";

  myProjectModal.append(
    projectTitleInputField,
    projectDescriptionInputField,
    addProjectBtn
  );
}
