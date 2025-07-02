import { myProjects } from "..";

export function displayProjects() {
  const myProjectsContainer = document.querySelector(".myProjectsContainer");
  myProjectsContainer.textContent = "";

  myProjects.forEach((myProject) => {
    console.log(myProject);

    const myProjectContainer = document.createElement("div");
    myProjectContainer.classList.add(".myProjectContainer");

    const myProjectNavigationBtn = document.createElement("button");
    myProjectNavigationBtn.classList.add(".myProjectNavigationBtn");

    const myProjectTaskCount = document.createElement("span");
    myProjectTaskCount.classList.add(".myProjectTaskCount");

    const myProjectDeleteBtn = document.createElement("button");
    myProjectDeleteBtn.classList.add(".myProjectDeleteBtn");

    myProjectNavigationBtn.textContent = `${myProject.title}`;
    myProjectTaskCount.textContent = `${myProject.tasks.length}`;
    myProjectDeleteBtn.textContent = "Delete";

    myProjectContainer.append(
      myProjectNavigationBtn,
      myProjectTaskCount,
      myProjectDeleteBtn
    );

    myProjectsContainer.append(myProjectContainer);
  });
}
