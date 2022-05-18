<template>
    <div class="note">
        <h2 v-text="content.title"></h2>
        <p v-text="content.content">
        </p>
    </div>
</template>

<script>
    export default {
        props: ['content']
    }
</script>

<style scoped>
    div.note{
        margin: 15px;
        min-width: 250px;
        min-height: 150px;

        border-radius: 0 10px 10px 10px;
        background: rgba(22, 25, 35,0.90);
        background-image: url(../../assets/back.png);
        background-size: cover;
        /* -webkit-backdrop-filter: blur(10px); */
        /* backdrop-filter: blur(10px); */
        /* border: 1px solid rgba(22, 22, 22, 0.5); */

    }
    div.note h2{
        width: 100%;
        min-height: 2em;
        background-color: rgba(0, 0, 0,0.40);
        border-radius: 10px 10px 0 0 ;
        padding: .5em;
    }
    div.note p{
        padding: 10px;
        max-width: 400px;
    }
</style>