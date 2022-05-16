<script setup>
    import { RouterView } from 'vue-router'
</script>
<template>
    <div id="box">
        <RouterView />
    </div>
</template>

<script>
    import { getAuth, onAuthStateChanged   } from "firebase/auth";
    export default{
        data(){
            return {
                isLogged: false,
            }
        },
        beforeMount(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user){
                    this.isLogged = true
                } else {
                    this.isLogged = false
                }
            });
        },
        created(){
            this.$router.beforeEach((to, from) => {
                if((to.name == "login" || to.name == "register" || to.name == "auth")  && this.isLogged){
                    return "/auth/logged"
                } else if(to.name =="logged" && !this.isLogged){
                    return "/auth/login"
                }
            })
        },
        watch: {
            isLogged(){
                console.log("user is logged ? "+this.isLogged)
            }
        }
    }
</script>
    
<style>
    @media (max-width:1000px) {
        div#box{
            margin: 3vh 5vw !important;
            min-height: 50vh !important;
            width: 90vw !important;
        }
        div#box h2{
            font-size: 2rem !important;
        }
    }
    div#box{
        background: rgba(255, 255, 255, 0.24);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.3px);
        -webkit-backdrop-filter: blur(8.3px);

        margin: 20vh 37.5vw 10vh 37.5vw;
        min-height: 50vh;
        width: 25vw;

        background-color: rgba(255, 255, 255,0.1);
        border-radius: 15px;
    }    
    div#box h3 a:hover{
        background-color: #f40552;
		transition: background-color .2s ease-in-out;
    }
    div#box h3 a{
        cursor: pointer;
        margin: 8px;
        padding: 8px 16px;
        text-decoration: none;
        background: rgba(254, 254, 225, 0.1);
        color: #fff;
        transition: background-color .2s ease-in-out;
    }
    div#box h4{
        margin: 1.5vh 1.5vw;
        text-align: center;
        color: red;
    }
    div#box h3{
        padding: 15px;
        text-align: center;
    }
    div#box h2{
        padding: 4vh 0 2vh 0;

        font-size: 3rem;
        text-align: center;
    }
    div#box form{
        height: auto;
        width: 100%;

        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div#box form button:hover{
        background-color: #f40552;
        transition: background-color .3s ease-in-out;
    }
    div#box form button{
        margin: 20px;
        width: 300px;
        height: 70px;

        color: #fff;
        font-size: 2rem;
        text-decoration: none;
        background-color: rgba(244,5,82,0.1);
        background-image: url(../../assets/back.png);
        background-size: 90%;
        animation: anim 60s infinite;
        border: 2px solid #f40552;
        backdrop-filter: blur(5px);
        transition: background-color .3s ease-in-out;
        cursor: pointer;
    }
    div#box form input{
        color: #000;
        font-size: 1.3rem;
        width: 260px;
        height: 55px;
        margin: 10px 0;
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
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