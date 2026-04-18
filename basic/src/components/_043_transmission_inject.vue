<script setup lang="ts">
import { inject } from 'vue';

const single = inject('single');
</script>

<template>
    <h1>single: {{ single }}</h1>
</template>
