<script setup>
    import backgroundVue from '../components/Concept/background.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <router-link to="/" class="nav-btn">Retour</router-link>

    <div id="concept-container">
        <div id="concept-content">
            <h1>Concept</h1>
            <h2>sous-titre</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus enim odit repellendus nostrum optio velit ab. Quisquam placeat repellat corporis maxime, corrupti cum ullam ad minus quidem molestiae aliquam?</p>
        </div>
        <div id="concept-img" class="pattern-dots-md gray-light">
            <img src="https://static.fnac-static.com/multimedia/Images/FD/Comete/146456/CCP_IMG_ORIGINAL/1930195.jpg" alt="random">
        </div>
    </div>
    <backgroundVue/>
    <!-- <div class="pattern-diagonal-stripes-sm separator" /> -->
</template>

<style scoped>
    .separator{
        height: 25px;
        width: 40%;
        margin-left: 53.5%;
        margin-right: 5.5%;
        color: #001D42;
    }
    a{
        position: absolute;
        right: 12.5px;
        top: 12.5px;
    }
    a:hover{
        background: #001D42 !important;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255,0.1);
    }

    div#concept-container{
        z-index: 1;

        width: 80vw;
        height: 80vh;
        margin: 10vh 10vw;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;
    }
    
    div#concept-container div#concept-content p{
        font-family: "JetBrains", sans-serif;
        text-align: right;
    }
    div#concept-container div#concept-content h1{
        font-family: "JetBrains", sans-serif;
        text-align: center; 
        margin: 30px;
        font-size: 3em;
    }
    div#concept-container div#concept-content h2{
        font-family: "JetBrains", sans-serif;
        text-align: right;
        margin: 15px; 
        color: #B6B6B6;
    }
    div#concept-container div#concept-content{
        font-weight: 700;
        font-size: 1.5em;
        width: 70%;
        margin-left: 30%;
    }

    div#concept-container div#concept-img img{
        transform: translate(-15px, -15px);
        border-radius: 15px;
    }
</style>