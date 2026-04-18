<script setup lang="ts">
import { inject } from 'vue';

// provice-inject-3: 获取对象
const single = inject('single');
</script>

<template>
    <h1>single: {{ single }}</h1>
</template>
