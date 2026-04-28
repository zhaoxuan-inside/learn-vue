import { TaskStore } from "../stores/task";

export const CurrentTask = (id: number) => {
  const taskStore = TaskStore();
  return taskStore.tasks.find((task) => task.id === id);
};
