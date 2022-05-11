<script setup>
import { useStore } from '@/utilities/stores'
import router from '@/utilities/router'

</script>
<template>
    <div>
        <h1 class="lol" v-html="store.article"></h1>
    </div>
</template>

<script>
export default{
    setup() {
        const store = useStore()
        if(store.article == null){
            router.push("/shop")
        }
        return {
            store,
        }
    },
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