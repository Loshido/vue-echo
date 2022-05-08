<script setup>
    import card from "./card.vue" ;  
</script>

<template>
    <div id="page">
        <div class="container">
            <h1>Articles</h1>
            <div class="row" id="top">
                <card />
                <card />
                <card />
                <card />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        margin: 0 10vw 0 10vw;
        padding-top: 10vh;
        width: 80vw;
        height: 100%;
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
        height: 50vh;
    }
    div#page{
        background-color: #161923;
        background-image: url(../../assets/back.png);
        background-size: 15%;
        height: 100vh;
        width: 100vw;
    }
</style>