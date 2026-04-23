<script setup lang="ts">
// State-4: 引用公布的 defineState 对象
import { counterStore } from './_080_state_define';

// State-5: 变量指向 defineState 对象
const counter = counterStore();
</script>

<template>
    <p>count: {{ counter.count }}</p>
    <button @click="counter.increment">INC</button>
</template>

<style></style>
