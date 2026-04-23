import { defineStore } from 'pinia';
import { ref } from 'vue';

export const counterStore = defineStore('counter', () => {
    const count = ref(0);
    const increment = () => {
        console.log('increment');
        count.value++;
    };
    return {
        count,
        increment,
    };
});
