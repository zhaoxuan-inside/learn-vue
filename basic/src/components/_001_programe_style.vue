<!-- 选项式编程 -->
<script lang="ts">
import { ref } from 'vue'
export default {
    name: 'optional',
    data() {
        return {
            opt_var: ref('this is a optional.')
        }
    }
}
</script>

<script setup lang="ts">
let composite = ref('this is a composite')
</script>

<template>
    <div>
        <h1>optional</h1>
        <p>{{ opt_var }}</p>
    </div>

    <div>
        <h1>composite</h1>
        <p>{{ composite }}</p>
    </div>
</template>
