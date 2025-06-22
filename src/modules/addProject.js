import { displayProjects, myProjects } from "../index";

export default function addProject(project) {
  myProjects.push(project);
  displayProjects();
}
