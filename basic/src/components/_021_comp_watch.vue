<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

const num_1 = ref(0)
const num_2 = ref(0)
const sum = computed(() => {
    return Number(num_1.value) + Number(num_2.value)
})

watch([sum], (o, n) => {
    console.log('old: ' + o)
    console.log('new: ' + n)
})
</script>

<template>
    <div>
        <div>num1: <input v-model="num_1" /></div>
        <div>num2: <input v-model="num_2" /></div>
        <div>sum: {{ sum }}</div>
    </div>
</template>

<style></style>
