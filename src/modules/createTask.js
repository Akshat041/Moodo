export function createTask(
  title,
  description,
  dueDate,
  priority,
  taskCompleted = false
) {
  return { title, description, dueDate, priority, taskCompleted };
}
