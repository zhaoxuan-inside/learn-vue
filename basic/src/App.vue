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

const tmp = ref()

function rewrite(content: Number | String | undefined) {
    // Component-4. 将接收到的数据写入 tmp 暂存区
    tmp.value = content
}
</script>

<template>
    <!-- Component-3. 父节点接收到已经绑定的 emites 产生的 update 事件，触发 rewrite 方法 -->
    <!-- Component-5. tmp 暂存区变更响应式触发 age 变化 -->
    <Component :name="name" :age="tmp" @update="rewrite" />
    <DefindVar />
    <Sytle />
    <Composite />
    <Watch />
    <!-- v-if 判断变量，决定是否要加在组件 -->
    <Lifecycle v-if="mount" />
    <button @click="mount = !mount">{{ mount }}</button>
</template>
