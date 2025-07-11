import {
  deleteProject,
  myProjects,
  setActiveProject,
  getActiveProject,
} from "..";
import { renderActiveProject } from "./renderActiveProject";

export function displayProjects() {
  const myProjectsContainer = document.querySelector(".myProjectsContainer");
  myProjectsContainer.textContent = "";

  myProjects.forEach((myProject, i) => {
    console.log(myProject);

    const myProjectContainer = document.createElement("div");
    myProjectContainer.classList.add("myProjectContainer");
    const myProjectBtn = document.createElement("button");
    myProjectBtn.classList.add("myProjectBtn");
    myProjectBtn.dataset.projectId = i;

    // set event listener to each button
    myProjectBtn.addEventListener("click", () => {
      setActiveProject(myProjects[i]);
      renderActiveProject(myProjects[i]);
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

    // ERROR: deleting default project gives an error
    myProjectDeleteBtn.addEventListener("click", () => {
      if (myProject.title == "Today") {
        alert(`The default project "Today" cannot be deleted.`);
        return;
      }

      deleteProject(i);
      displayProjects();
      setActiveProject(myProjects[0]);
      renderActiveProject(myProjects[0]);
    });

    myProjectsContainer.append(myProjectContainer);
  });
}
