import { defineStore } from "pinia";
import { ref } from "vue";

export const TaskStore = defineStore("task", () => {
  const idx = ref(0);
  const tasks = ref<{ id: number; name: string }[]>([]);

  const addTask = (name: string) => {
    if (!name) {
      return;
    }

    tasks.value.push({
      id: idx.value,
      name,
    });

    idx.value += 1;
  };

  const delTask = (idx: number) => {
    tasks.value.splice(idx, 1);
  };

  return {
    tasks,
    addTask,
    delTask,
  };
});
