// this module should only be responsible for creating project modal

// import { myProjects } from "../index";
// import { createProject } from "../index";
// import addProject from "./addProject";
// import { displayProjects } from "../index";

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

  document
    .querySelector(".myProjectModal")
    .append(
      projectTitleInputField,
      projectDescriptionInputField,
      addProjectBtn
    );

  //   addProjectBtn.addEventListener("click", () => {
  //     const { getProjectTitle, getProjectDescription } = getInputs();

  //     const project = createProject(getProjectTitle, getProjectDescription);

  //     addProject(project);
  //     console.log(myProjects);

  //     createNewProjectBtn.removeEventListener("click", addProjectBtn);
  //     clearInputs();
  //   });

  //   function clearInputs() {
  //     projectTitleInputField.textContent = "";
  //     projectDescriptionInputField.textContent = "";
  //   }
}

// function getInputs() {
//   const getProjectTitle = document.querySelector(
//     ".projectTitleInputField"
//   ).value;

//   const getProjectDescription = document.querySelector(
//     ".projectDescriptionInputField"
//   ).value;

//   return { getProjectTitle, getProjectDescription };
// }

// createNewProjectBtn.addEventListener("click", () => {
//   createProjectModal();
// });
