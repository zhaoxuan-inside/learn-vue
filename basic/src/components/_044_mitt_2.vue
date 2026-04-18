<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import bus from './_044_mitt_bus';

const msgList = ref<string[]>([]);
const currMsg = ref('');

const gameHandler = (msg: string) => {
    console.log('[game] ' + msg);
    // 4. 使用 push 添加新消息，而不是 fill
    msgList.value.push(msg);
};

// 组件安装后开始监听
onMounted(() => {
    bus.on('game', gameHandler);
});

// 组件卸载后关闭监听
onUnmounted(() => {
    bus.off('game', gameHandler);
});

function sendMsg() {
    if (currMsg.value.trim()) {
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
