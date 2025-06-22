export function createProject(title, description) {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  function removeTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
  }

  function projectTaskCount() {
    return tasks.length;
  }

  return { title, description, tasks, addTask, removeTask, projectTaskCount };
}
