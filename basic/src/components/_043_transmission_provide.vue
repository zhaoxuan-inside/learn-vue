<script setup lang="ts">
import Inject from './_043_transmission_inject.vue'

import { provide, ref } from 'vue';

const single = ref(true);
provide('single', single);
</script>

<template>
    <h1>{{ single }}</h1>
    <button @click="single = !single">SINGLE</button>
    <Inject/>
</template>

<style></style>
