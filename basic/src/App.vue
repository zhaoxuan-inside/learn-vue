<script setup lang="ts">
import DefindVar from './components/_000_basic_struct.vue'
import Sytle from './components/_010_programe_style.vue'
import Composite from './components/_020_comp.vue'
import Watch from './components/_021_comp_watch.vue'
import Lifecycle from './components/_030_lifecycle.vue'

import { ref } from 'vue'
const mount = ref(true)
</script>

<template>
    <DefindVar />
    <Sytle />
    <Composite />
    <Watch />
    <Lifecycle v-if="mount" />
    <button @click="mount = !mount">{{ mount }}</button>
</template>
