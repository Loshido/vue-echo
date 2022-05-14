<script setup>
 import {articles,getArticle} from "../../assets/data.js"
 import { RouterLink } from 'vue-router'
</script>
<template>
    <h1 id="retour"> 
        <RouterLink to="/shop">Revenir</RouterLink>  
    </h1>
    <div id="article-container" v-if="article !=''">
        <div id="article-img">
            <img :src="page.image.src" :alt="page.image.alt">
        </div>
        <div id="article-content">
            <h1 v-text="page.title"></h1>
            <p v-html="page.content"></p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            page: {}
        }
    },
    created(){
        this.page = getArticle(this.article)
    }
}
</script>

<style scoped>
    div#article-container{
        background-color: #161923;
        box-shadow: 0 0 100px rgba(255, 255, 255,0.2);

        margin: 10vh 20vw;
        margin-top: 5vh;
        height: 60vh;
        width: 60vw;

        display: inline-flex;
    }
    div#article-container #article-img{
        width: 80%;
        height: 80%;
        margin: 5%;
    }
    div#article-container #article-img img{
        width: 24vw;
        max-height: 100%;
        object-fit: scale-down;
    }
    div#article-container #article-content h1{
        padding: .5em;
    }
    div#article-container #article-content{
        padding: 5%;
        width: 100%;
        height: 100%;
    }
    h1#retour{
        margin: 0 15vw;
        font-size: 3em;
        padding-top: 15vh;
        text-decoration: underline;
    }
</style>