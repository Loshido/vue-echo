<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <div id="tools">
        <nav id="nav-tools">
            <RouterLink to="/tools/download-estimator" id="download">Estimation de temps de telechargements</RouterLink>
            <RouterLink to="/">¯\_(ツ)_/¯</RouterLink>
            <RouterLink to="/">¯\_(ツ)_/¯</RouterLink>
            <RouterLink to="/">¯\_(ツ)_/¯</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
    div#tools{
        min-height: 80vh;
        max-height: 100vh;
        width: 100vw;
        padding: 25px;
    }
    nav#nav-tools a:hover{
        background-color: rgba(0, 0, 0,0.4);
        -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
        background-clip: border-box;-webkit-background-clip: none;
    }
    nav#nav-tools a#download{
        font-size: 4em;
    }
    nav#nav-tools a:first-child{
        border-top: none !important;
    }
    nav#nav-tools a{
        -webkit-text-fill-color: transparent;
        background-clip: text;-webkit-background-clip: text;

        font-family: 'Koulen';
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        text-align: center;

        font-size: 5em;
        border-top: 1px groove rgba(0, 0, 0, 0.4);
    }
    nav{
        background-color: rgba(255, 255, 255, 0.2);
        width: 35vw;
        height: 75vh;
        margin: 10vh 32.5vw -2vh 32.5vw;
        border-radius: 10px;
        backdrop-filter: blur(3px);

        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
    }
    @media (max-width: 1000px) {
        nav#nav-tools{
            background-color: rgba(255, 255, 255, 0.2);
            width: 100% !important;
            min-height: 75vh !important;
            margin: 0 !important;
            border-radius: 10px;
        }
        nav#nav-tools a#download{
            font-size: 2.5em ;
        }
        nav#nav-tools a{
            font-size: 3em;
        }
    }
</style>