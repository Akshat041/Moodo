import {
  deleteProject,
  restoredProjects,
  setActiveProject,
  getActiveProject,
} from "..";
import { renderActiveProject } from "./renderActiveProject";

export function displayProjects() {
  const myProjectsContainer = document.querySelector(".myProjectsContainer");
  myProjectsContainer.textContent = "";

  restoredProjects.forEach((myProject, i) => {
    const myProjectContainer = document.createElement("div");
    myProjectContainer.classList.add("myProjectContainer");
    const myProjectBtn = document.createElement("button");
    myProjectBtn.classList.add("myProjectBtn");
    myProjectBtn.dataset.projectId = i;

    // set event listener to each button
    myProjectBtn.addEventListener("click", () => {
      setActiveProject(restoredProjects[i]);
      renderActiveProject(restoredProjects[i]);
    });

    const myProjectTaskCount = document.createElement("span");
    myProjectTaskCount.classList.add("myProjectTaskCount");

    const myProjectDeleteBtn = document.createElement("button");
    myProjectDeleteBtn.classList.add("myProjectDeleteBtn");

    myProjectBtn.textContent = `${myProject.title}`;
    myProjectTaskCount.textContent = `${myProject.tasks.length}`;
    myProjectDeleteBtn.textContent = "Delete";

    myProjectContainer.append(
      myProjectBtn,
      myProjectTaskCount,
      myProjectDeleteBtn
    );

    myProjectDeleteBtn.addEventListener("click", () => {
      if (myProject.title == "Inbox") {
        alert(`The default project "Inbox" cannot be deleted.`);
        return;
      }

      deleteProject(i);
      displayProjects();
      setActiveProject(restoredProjects[0]);
      renderActiveProject(restoredProjects[0]);
    });

    myProjectsContainer.append(myProjectContainer);
  });
}
