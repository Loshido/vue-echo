<script setup>
import { useStore } from '@/utilities/stores'
import router from '@/utilities/router'

</script>
<template>
    <div>
        <h1 class="lol" @click="click"></h1>
    </div>
</template>

<script>
export default{
    props: ["article"]
}
</script>

<style scoped>
    div{
        height: 100vh;
        width: 100vw;
    }
    h1{
        font-size: 3em;
        padding-top: 20vh;
        text-align: center;
    }
</style>