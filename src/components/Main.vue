<script setup>
import {Texts} from "../assets/data.js";
</script>

<template>
    <main>
        <div id="s1">
            <p>{{Texts().header}}</p>
            
        </div>
        <div id="s2">
            <a href="#" @click="moveIt">Shop</a>
        </div>
    </main>
</template>

<script>
export default {
    methods: {
        rd(x){
            var random = Math.floor(Math.random() * x + 1)
            if(Math.floor(Math.random()*2) +1 == 1) {
                random = -random;
            }
            return random;
        },
        moveIt(){
            document.querySelector("div#s2 a").style.transform = `translate(${this.rd(150)}px, ${this.rd(200)}px)`;
        }
    }
}
</script>

<style scoped>
    main{
        width: 100%;
        height: 60vh;
        display: flex;
    }
    div{
        width: 50%;
        height: 100%;
    }
    #s1{
        width: 60vw;
        padding: 0 10vw;
        font-size: 30px;
    }
    #s1 p{
        padding: 50px 0;
        font-weight: 500;
    }
    #s2{
        width: 40vw;
        display: flex;
    
        justify-content: center; 
        align-items: center;  
    }
    #s2 a{
        text-decoration: none;
        font-size: 64px;
        padding: 25px 75px;

        background-color: rgba(244,5,82,0.1);
        background-image: url(../assets/back.png);
        background-size: 50%;
        animation: anim 80s infinite;
        border: 2px solid #f40552;
        backdrop-filter: blur(5px);
        transition: background-color .3s ease-in-out;
    }
    #s2 a:hover{
        background-color: #f40552;
        transition: background-color .3s ease-in-out;
    }
    @keyframes anim {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 500px -500px;
        }
        100% {
            background-position: 1000px -1000px;
        }
    }
</style>