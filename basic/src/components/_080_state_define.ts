import { defineStore } from 'pinia';
import { ref } from 'vue';

// State-3: 组合式编程创建并公布 defineStore 对象
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
