<script setup lang="ts">
import Slot from './_050_slot.vue';
</script>

<template>
    <Slot>
        <template #header>
            <div>Header</div>
        </template>

        <div>Content</div>

        <template #footer>
            <div>Footer</div>
        </template>
    </Slot>
</template>
