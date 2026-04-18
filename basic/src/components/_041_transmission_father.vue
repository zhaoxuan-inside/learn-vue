<script setup lang="ts">
// Transmission-2: 父组件引入孙组件
import Child from './_041_transmission_child.vue'

// Transmission-4: 父组件定义接受数据的结构
const props = defineProps<{ name: string; age: number }>()
// Transmission-8: 父组件定义事件回传的接口
const emits = defineEmits<{
    function_1: []
    function_2: [name: string]
    function_3: [name: string, age: number]
}>()

// Transmission-12: 对接收到的孙组件的信息加工转发给祖组件
function function_1() {
    console.log('father trigger function1')
    emits('function_1')
}

function function_2(name: string) {
    console.log('father trigger function2, name: ' + name)
    emits('function_2', name)
}

function function_3(name: string, age: number) {
    console.log('father trigger function3, name: ' + name + ', age: ' + age)
    emits('function_3', name, age)
}
</script>

<template>
    父组件
    <br />
    ---
    <br />
    收到消息
    <br />
    <!-- Transmission-12: 父组件绑定子组件回传的接口和处理的方法   -->
    <Child
        :name="props.name"
        :age="props.age"
        @function_1="function_1"
        @function_2="function_2"
        @function_3="function_3"
    />
</template>

<style></style>
