<script setup>
    import card from "./card.vue" ;  
    import {articles} from "../../assets/data.js"
</script>

<script>
export default{
    methods: {
        getRows(){
            if (articles.length == 0){
                return false;
            }
            const y = Math.floor(articles.length/4.1)+1;
            const z = []
            if ( y == 1 ) { 
                z[0] = []
                articles.forEach((v, i) => {
                    z[0][i] = v
                })
                console.log(z)
                return z;
            } else {
                for(let i = 0; i < y ;i++){
                    z[i] = []
                    articles.forEach((v,j) => {
                        if(j <= i*4+3 && j >= i*4){
                            z[i][j-i*4] = v
                        }
                    })
                } 
                return z;
            }
        }
    }
}
</script>

<template>
    <div id="page">
        <h1 v-if="!getRows()" id="warning">⚠️​ Il n'y a pas d'articles disponible ⚠️​</h1>
        <div class="container" v-for="(item,index) in getRows()">
            <div class="row">
                <card 
                    v-for="(i,j) in item" 
                    :title="i.title" 
                    :content="i.content" 
                    :image="i.image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #warning{
        font-size: 2em;
        width: 100vw;
        padding: 20vh 20vw;
        height: 85vh;
        text-align: center;
    }
    .container:first-child{
        padding-top: 10vh;
    }
    .container{
        margin: 0 10vw 0 10vw;
        width: 80vw;
        height: auto;
    }
    div.container h1{
        margin: 5vh 0 0 0;
        text-decoration: underline;
    }
    div.row#top{
        margin-top: 0;
    }
    div.row{
        display: flex;
        flex-direction: row;

        margin: 10vh 0;
        width: 80vw;
        height: 60vh;
    }
    div#page{
        background-color: #161923;
        background-image: url(../../assets/back.png);
        background-size: 15%;
        /* height: 100vh; */
        width: 100vw;
    }
</style>