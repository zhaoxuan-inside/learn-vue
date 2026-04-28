<script setup lang="ts">
import { ref } from "vue";
import { TaskStore } from "../../stores/task";

const inputRef = ref<HTMLInputElement | null>(null);

const taskStore = TaskStore();

function addTask() {
  let ele = inputRef.value;
  let content = "";
  if (ele) {
    content = ele.value;
    inputRef.value = null;
  }

  taskStore.addTask(content);
}
</script>

<template>
  Tasks<br />
  <div>
    <input type="text" , placeholder="请输入todo" ref="inputRef" />
    <button @click="addTask">提交</button>
  </div>

  <div v-for="(task, idx) in taskStore.tasks" :key="task.id">
    <div>
      <RouterLink :to="{ name: 'Task', params: { id: task.id } }">
        {{ idx }}
        {{ task.name }}
      </RouterLink>
      <button @click="taskStore.delTask(idx)">删除</button>
    </div>
  </div>
</template>
