<script setup lang="ts">
import Slot from './_050_slot.vue';
</script>

<template>
    <Slot>
        <template #header="data">
            <div>Header{{ data.content }}</div>
        </template>

        <div>Content</div>

        <template #footer="info">
            <div>Footer {{ info.content }}</div>
        </template>
    </Slot>
</template>
