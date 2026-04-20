<script setup lang="ts"></script>

<template>
    <div>
        <slot name="header"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="footer"></slot>
    </div>
</template>
