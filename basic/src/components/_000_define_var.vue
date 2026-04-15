<script setup lang="ts">
// 导入 ref 用来进行响应式编程
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <section id="center">
        <button class="counter" @click="count++">{{ count }}</button>
    </section>
</template>
