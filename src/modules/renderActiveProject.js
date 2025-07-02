export function renderActiveProject(project) {
  const createTaskBtn = document.querySelector(".createTaskBtn");

  const mainContentContainer = document.querySelector(".mainContentContainer");

  //   mainContentContainer.textContent = "";

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");

  const activeProjectTitle = document.createElement("h1");
  activeProjectTitle.classList.add("activeProjectTitle");

  const activeProjectDescription = document.createElement("p");
  activeProjectDescription.classList.add("activeProjectDescription");

  const activeProjectTaskContainer = document.createElement("div");
  activeProjectTaskContainer.classList.add("activeProjectTaskContainer");

  const activeProjectTaskModal = document.createElement("div");
  activeProjectTaskModal.classList.add("activeProjectTaskModal");

  activeProjectTitle.textContent = `${project.title}`;
  activeProjectDescription.textContent = `${project.description}`;

  mainContent.append(
    activeProjectTitle,
    activeProjectDescription,
    activeProjectTaskContainer,
    activeProjectTaskModal
  );

  mainContentContainer.insertBefore(mainContent, createTaskBtn);
}
