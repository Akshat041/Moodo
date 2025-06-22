import { myProjects } from "..";

export function displayProjects() {
  myProjects.forEach((project) => {
    console.log(project.title);
  });
}
