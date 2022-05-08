<script>
import { useStore } from '@/utilities/stores'
import router from '@/utilities/router'
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
<template>
    <div>
        <h1 class="lol" v-html="store.article"></h1>
    </div>
</template>



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