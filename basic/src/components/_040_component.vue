<template>
    <p>name: {{ name }}, age: {{ age }}</p>
    <input v-model="content" @blur="handleUpdate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ name: String; age: Number }>()
const emits = defineEmits<{
    change: []
    update: [value: Number | String | undefined]
}>()

const content = ref<Number | String>()
function handleUpdate() {
    emits('update', content.value)
}
</script>

<style></style>
