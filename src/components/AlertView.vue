<template>
    <div class="w-full flex justify-center items-center">
        <div :class="{'w-full md:w-7/12 p-4 text-center z-40 fixed top-1 bg-slate-300 rounded-2xl flec justify-center text-2xl ': true, ...alertCategory,   }">
    
            <slot>
        
            </slot>
        </div>
    </div>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['category'])

const alertCategory = computed(() => {
    switch (props.category) {
        case 'error':
            return {'text-red-600': true}
        case 'warning':
            return {'text-amber-600' : true}
        case 'info':
            return {'text-blue-600': true}
        default:
            return {'text-green-600': true}
    }
})

</script>

<style scoped>

</style>