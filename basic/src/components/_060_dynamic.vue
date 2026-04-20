<script setup lang="ts">
import { h } from 'vue';

const datas = [
    { type: 'text', content: 'hello, Text' },
    { type: 'image', content: '蒙娜丽莎.jpg' },
    { type: 'audio', content: '命运交响曲' },
    { type: 'video', content: '猫鼠游戏' },
];

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
        <component :is="render(data.type, data.content)" />
    </div>
</template>

<style></style>
