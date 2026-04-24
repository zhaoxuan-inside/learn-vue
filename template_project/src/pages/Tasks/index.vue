<script setup lang="ts">
import { ref } from "vue";

const tmp = ref("");

let idx = 0;
const tasks = ref<{ idx: number; content: string }[]>([]);

function deleteTask(id: number) {
  for (let idx = 0; idx < tasks.value.length; idx++) {
    if (tasks.value[idx].idx == id) {
      tasks.value.splice(idx, 1);
      break;
    }
  }
}

function addTask() {
  if (tmp.value.trim()) {
    idx++;
    const content = tmp.value;
    tasks.value.push({ idx, content });
    tmp.value = "";
  }
}
</script>

<template>
  Tasks<br />
  <div>
    <input type="text" , placeholder="请输入todo" v-model="tmp" />
    <button @click="addTask">提交</button>
  </div>

  <div v-for="task in tasks">
    <div>
      {{ task.content }}
      <button @click="deleteTask(task.idx)">删除</button>
    </div>
  </div>
</template>
