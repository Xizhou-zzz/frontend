<script setup>
import { ref } from 'vue'

const tab = ref('one')

</script>

<template>
    <div class="flex gap-2" v-for="t in ['one', 'two', 'three']">
        <button @click="() => { tab = t }" :style="tab == t ? 'color: red' : 'color: black'">{{ t }}</button>
    </div>

    <div v-if="tab == 'one'">
        one
    </div>
    <div v-else-if="tab == 'two'">
        two
    </div>
    <div v-else-if="tab == 'three'">
        three
    </div>
</template>