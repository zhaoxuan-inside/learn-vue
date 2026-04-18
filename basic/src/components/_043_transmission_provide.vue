<script setup lang="ts">
import Inject from './_043_transmission_inject.vue'

import { provide, ref } from 'vue';

// provice-inject-1: 创建响应式对象
const single = ref(true);
// provice-inject-2: 存放对象
provide('single', single);
</script>

<template>
    <h1>{{ single }}</h1>
    <button @click="single = !single">SINGLE</button>
    <Inject/>
</template>

<style></style>
