<script setup lang="ts">
import DefindVar from './components/_000_basic_struct.vue'
import Sytle from './components/_010_programe_style.vue'
import Composite from './components/_020_comp.vue'
import Watch from './components/_021_comp_watch.vue'
import Lifecycle from './components/_030_lifecycle.vue'
import Component from './components/_040_component.vue'

import { ref } from 'vue'
const mount = ref(true)

const name = ref('zhangsan')
const age = ref(18)

function showUpdate(content: Number | String | undefined) {
    console.log('content: ' + content)
}
</script>

<template>
    <Component :name="name" :age="age" @update="showUpdate" />
    <DefindVar />
    <Sytle />
    <Composite />
    <Watch />
    <!-- v-if 判断变量，决定是否要加在组件 -->
    <Lifecycle v-if="mount" />
    <button @click="mount = !mount">{{ mount }}</button>
</template>
