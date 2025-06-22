import { myProjects } from "../index";

export function addProject(project) {
  myProjects.push(project);
  console.log(myProjects);
}
