<script setup lang="ts">
import { CurrentTask } from "../../composible/current_task";

function getContent(id: number) {
  const currentTask = CurrentTask(id);
  return currentTask?.name;
}
</script>

<template>
  Task <br />
  {{ getContent(Number($route.params.id)) }}
</template>
