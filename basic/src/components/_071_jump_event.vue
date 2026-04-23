<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    Basic
    <button @click="router.push('/about')">JUMP</button>
</template>
