<!-- 选项式编程 -->
<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'optional',
    data() {
        return {
            opt_var: ref(0)
        }
    }
}
</script>

<script setup lang="ts">
let composite = ref(0)
</script>

<template>
    <div>
        <h1>optional</h1>
        <p @click="opt_var = opt_var + 1">{{ opt_var }}</p>
    </div>

    <div>
        <h1>composite</h1>
        <p @click="composite = composite + 1">{{ composite }}</p>
    </div>
</template>
