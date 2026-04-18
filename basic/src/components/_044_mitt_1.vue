<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import bus from './_044_mitt_bus';

const msgList = ref<string[]>([]);
const currMsg = ref('');

const gameHandler = (msg: string) => {
    console.log('[game] ' + msg);
    msgList.value.push(msg);
};

// mitt-6: [可选] mount 组件之后就开始监听
onMounted(() => {
    // mitt-5: 监听 'game'，并定义消息的处理 function
    bus.on('game', gameHandler);
});

// mitt-9: [可选】 unmount 组件时，关闭本组件的通信总线监听
onUnmounted(() => {
    // mitt-8: 不需要时，关闭本组件的通信总线监听
    bus.off('game', gameHandler);
});

function sendMsg() {
    if (currMsg.value.trim()) {
        // mitt-7: 发送消息到通信总线
        bus.emit('game', currMsg.value);
        currMsg.value = ''; // 可选：发送后清空输入框
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(msg, idx) in msgList" :key="idx">{{ msg }}</li>
        </ul>

        <input v-model="currMsg" placeholder="输入消息" @keyup.enter="sendMsg" />
        <button @click="sendMsg">发送</button>
    </div>
</template>
