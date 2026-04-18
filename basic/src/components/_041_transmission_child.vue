<script setup lang="ts">

// Transmission-3: 孙组件定义接受数据的结构
const props = defineProps<{name: string; age: number}>()
// Transmission-9: 孙组件定义事件回传的接口
const emits = defineEmits<{
    function_1: []
    function_2: [name: string]
    function_3: [name: string, age: number]
}>()

// Transmission-11: 孙组件触发事件的function，回传事件给父组件
function function_1() {
    console.log('child trigger function1')
    emits('function_1')
}

function function_2(name: string) {
    console.log('child trigger function2, name: ' + name)
    emits('function_2', name)
}

function function_3(name: string, age: number) {
    console.log('child trigger function3, name: ' + name + ', age: ' + age)
    emits('function_3', name, age)
}

</script>

<template>

子组件</br>
---</br>
<!-- Transmission-10: 孙组件绑定ele和事件回传的接口 -->
<p>name: {{ name }}, age: {{ age }}</p>
<button @click="function_1()">更新</button>
<button @click="function_2('lisi')">更新姓名</button>
<button @click="function_3('zhangsan', 18)">更新姓名年龄</button>
---</br>
</template>

<style>
</style>