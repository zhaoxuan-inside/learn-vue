<script setup lang="ts"></script>

<template>
    <div>
        <slot name="header" content="123"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="footer" content="234"></slot>
    </div>
</template>
