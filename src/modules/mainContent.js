import { body } from "./sidebar";

const mainContent = document.createElement("div");
mainContent.classList.add("mainContent");

const mainContentContainer = document.createElement("div");
mainContentContainer.classList.add("mainContentContainer");

const currentProjectName = document.createElement("h2");
currentProjectName.classList.add("currentProjectName");

const taskContainer = document.createElement("div");
taskContainer.classList.add("taskContainer");

const addTaskBtn = document.createElement("button");
addTaskBtn.classList.add("addTaskBtn");

export default function createMainContent() {
  currentProjectName.textContent = "Today"; // dynamic
  //   taskContainer.textContent = "this is task container";
  addTaskBtn.textContent = "Add Task"; // use add icon later

  mainContentContainer.append(currentProjectName, taskContainer, addTaskBtn);
  mainContent.append(mainContentContainer);
  body.append(mainContent);
}

export { addTaskBtn };
