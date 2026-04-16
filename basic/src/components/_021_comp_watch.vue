<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect, watchPostEffect, watchSyncEffect } from 'vue'

const num_1 = ref(0)
const num_2 = ref(0)
const sum = computed(() => {
    return Number(num_1.value) + Number(num_2.value)
})

watch([num_1, num_2], (o, n) => {
    console.log('watch')
})

watchSyncEffect(() => {
    num_1.value
    num_2.value
    console.log('watch sync effect')
})

watchEffect(() => {
    num_1.value
    num_2.value
    console.log('watch effect')
})

watchPostEffect(() => {
    num_1.value
    num_2.value
    console.log('watch post effect')
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
