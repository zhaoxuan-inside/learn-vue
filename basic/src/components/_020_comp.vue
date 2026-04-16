<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const display = ref('hello, world!')
const react = reactive({ value: 'hello, vue3' })

setTimeout(() => {
    display.value = 'bye, world!'
    react.value = 'bye, vue3'
}, 2000)

const num_1 = ref(0)
const num_2 = ref(0)
const sum = computed(() => {
    return Number(num_1.value) + Number(num_2.value)
})
</script>

<template>
    <div>
        <h1>{{ display }}</h1>
        <h1>{{ react.value }}</h1>
    </div>

    <div>
        <div>num1: <input v-model="num_1" /></div>
        <div>num2: <input v-model="num_2" /></div>
        <div>sum: {{ sum }}</div>
    </div>
</template>

<style></style>
