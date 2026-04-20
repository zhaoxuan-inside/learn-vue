<script setup lang="ts">
import DefindVar from './components/_000_basic_struct.vue';
import Sytle from './components/_010_programe_style.vue';
import Composite from './components/_020_comp.vue';
import Watch from './components/_021_comp_watch.vue';
import Lifecycle from './components/_030_lifecycle.vue';
import Component from './components/_040_transmission_c2f.vue';
// Transmission-1: 祖组件引入父组件
import Transmission from './components/_041_transmission_father.vue';
import Provide from './components/_043_transmission_provide.vue';
import Im1 from './components/_044_mitt_1.vue';
import Im2 from './components/_044_mitt_2.vue';

import Slot from './components/_050_slot_wrapper.vue';

import Dyanmic from './components/_060_dynamic.vue';

import { ref } from 'vue';
const mount = ref(true);

const name = ref('wudi');
const age = ref(999);

const tmp = ref();

function rewrite(content: number | string | undefined) {
    // Component-4. 将接收到的数据写入 tmp 暂存区
    tmp.value = content;
}

function function_1() {
    console.log('super trigger function1');
    name.value = '';
    age.value = 0;
}

function function_2(newName: string) {
    console.log('super trigger function2, name: ' + name);
    name.value = newName;
}

function function_3(newName: string, newAge: number) {
    console.log('super trigger function3, name: ' + name + ', age: ' + age);
    name.value = newName;
    age.value = newAge;
}
</script>

<template>
    <Dyanmic />

    <Slot />

    <Im1 />
    <br />
    <Im2 />

    <Provide />

    <!-- Transmission-6: 祖组件定义传输数据的解构的绑定关系 -->
    <!-- Transmission-7: 祖组件事件回传的接口，以及接口绑定的funcion -->
    <!-- Transmission-13: 对接收到的父组件的信息根据绑定关系调用function -->
    <Transmission
        :name="name"
        :age="age"
        @function_1="function_1"
        @function_2="function_2"
        @function_3="function_3"
    />

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
