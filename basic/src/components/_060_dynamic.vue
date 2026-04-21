<script setup lang="ts">
// Dynamic-1: 引用 h 函数
import { h } from 'vue';

const datas = [
    { type: 'text', content: 'hello, Text' },
    { type: 'image', content: '蒙娜丽莎.jpg' },
    { type: 'audio', content: '命运交响曲' },
    { type: 'video', content: '猫鼠游戏' },
];

// Dynamic-2: 定义 h 函数封装的元素
const render = (type: string, content: string) => {
    switch (type) {
        case 'text':
            return h('div', 'display text, content: ' + content);
        case 'image':
            return h('img', { src: 'http://' + content });
    }
};
</script>

<template>
    <div v-for="data in datas">
        <!-- Dynamic-3: 定义组件占位符，并绑定 h 函数 -->
        <component :is="render(data.type, data.content)" />
    </div>
</template>

<style></style>
