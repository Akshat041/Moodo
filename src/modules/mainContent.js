import { body } from "./sidebar";

const mainContent = document.createElement("div");
mainContent.classList.add("mainContent");

const currentProjectName = document.createElement("h1");
currentProjectName.classList.add("currentProjectName");

const taskContainer = document.createElement("div");
taskContainer.classList.add("taskContainer");

const addTaskBtn = document.createElement("button");
addTaskBtn.classList.add("addTaskBtn");

export default function createMainContent() {
  currentProjectName.textContent = "Today"; // dynamic means should be able to change
  taskContainer.textContent = "this is task container";
  addTaskBtn.textContent = "Add Task"; // use add icon later

  mainContent.append(currentProjectName, taskContainer, addTaskBtn);
  body.append(mainContent);
}
