const myProjects = [];

function createTask(title, description, due_date, priority) {
  return { title, description, due_date, priority };
}

function createProject(title, description) {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }
  function removeTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
  }

  return { title, description, tasks, addTask, removeTask };
}

function addProject(project) {
  myProjects.push(project);
}
function removeProject(project) {
  myProjects.splice(myProjects.indexOf(project), 1);
}

// DOM
const addProjectBtn = document.createElement("button");
addProjectBtn.classList.add("addProjectBtn");

addProjectBtn.textContent = "Add Project";

document.querySelector("body").appendChild(addProjectBtn);

function createProjectModal() {
  const projectTitleInputField = document.createElement("input");
  projectTitleInputField.classList.add("projectTitleInputField");
  projectTitleInputField.placeholder = "Project title";

  const projectDescriptionInputField = document.createElement("input");
  projectDescriptionInputField.classList.add("projectDescriptionInputField");
  projectDescriptionInputField.placeholder = "Project Description";

  const add = document.createElement("button");
  add.classList.add("add");

  add.textContent = "Add this Project";

  document
    .querySelector("body")
    .append(projectTitleInputField, projectDescriptionInputField, add);

  add.addEventListener("click", () => {
    const { getProjectTitle, getProjectDescription } = getInputs();

    const proj1 = createProject(getProjectTitle, getProjectDescription);

    addProject(proj1);
    console.log(myProjects);
  });
}

function getInputs() {
  const getProjectTitle = document.querySelector(
    ".projectTitleInputField"
  ).value;

  const getProjectDescription = document.querySelector(
    ".projectDescriptionInputField"
  ).value;

  return { getProjectTitle, getProjectDescription };
}

addProjectBtn.addEventListener("click", () => {
  createProjectModal();
});

const projectDefault = createProject(
  "default project",
  "about default project"
);

addProject(projectDefault);
console.log(myProjects);

projectDefault.addTask("task 1", "about task 1");
