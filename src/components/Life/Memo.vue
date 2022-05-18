<script setup>

    import requests from "../../utilities/requests.js"
    import Note from "./Note.vue"
    const truc = requests("memo")
</script>

<template>
    <div id="memo-pop" v-show="IsMemoOpen">
        <form id="memo-form" @submit.prevent="SendMemo">
            
            <h3>Création d'un Mémo <button @click="OpenMemo" id="close">Close</button></h3>
            <div id="fill">
                <input type="text" placeholder="Titre" v-model="Memo.title">
                <textarea  cols="40" rows="5" v-model="Memo.content">Contenu</textarea>
            </div>
            <button id="send" type="submit">Déposer</button>
        </form>
    </div>
    <div id="titles">
        <h1>Mémo</h1>
        <hr>
        <h2>Vous pouvez ici déposer des mémos</h2>
    </div>
    <div id="holder">
        <button id="toMemo" @click="OpenMemo">
            Créer un Mémo
        </button>
        <Note :content="truc" />

    </div>

</template>

<script>
    export default {
        data(){
            return {
                Memo: {
                    title: "Titre",
                    content: "Contenu",
                },
                IsMemoOpen: false
            }
        },
        methods: {
            OpenMemo(){
                this.IsMemoOpen = !this.IsMemoOpen
            }
        },
        SendMemo(){

        }
    }
</script>

<style scoped>
    div#memo-pop form h3{
        padding: 10px;
        font-size: 1.6em;
    }
    div#memo-pop form div#buttons{
        width: 40%;
        height: 24vh;
        float: right;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        align-content: space-around;
    }
    div#memo-pop form button#close{
        float: right;
        padding: .5em;
        font-weight: 700;
        color: #161923;
    }
    div#memo-pop form button#send{
        width: 30%;
        float: right;
        margin: 5%;
        width: max-content;
        /* margin-top: 20%; */
        padding:10px;
        color: #161923;
        font-size: 1.2em;
        font-weight: 700;
    }
    div#memo-pop form div textarea{
        color: #161923;
        margin:10px;
        padding: .7em;
        border: none;
        max-width: 100%;
        height: 10vh;
        max-height: 20vh;
    }
    div#memo-pop form div input{
        color: #161923;
        margin:10px;
        padding: .7em;
        border: none;
    }
    div#memo-pop form div#fill{
        padding: 25px;
        width: 60%;
        height: 100%;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: flex-start;
    }
    div#memo-pop form{
        margin: 30vh 25vw;
        width: 50vw;
        min-height: 30vh;

        border-radius: 10px;
        background-color: #161923;
    }
    div#memo-pop{
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.75);
    }
    button#toMemo{
        font-size: 1.2em;
        
        margin: 10px;
        padding: 25px;
        border-radius: 5px 0 0 5px;
        border: none;
        border-right: #f40552 3px solid;
        background: rgba(22, 25, 35,0.90);
        background-image: url(../../assets/back.png);
        background-size: 200%;
        /* -webkit-backdrop-filter: blur(10px); */
        /* backdrop-filter: blur(10px); */
    }
    div#titles{
        margin-top: 15vh;
        padding: 0 3rem;
    }
    div#titles hr{
        border: 2px solid #f40552;
        margin-right: 95%;
    }
    div#holder{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        width: 90vw;
        min-height: 50vh;
        margin: 5vh 5vw;

        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 12.5px rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 1000px) {
        div#titles{
            margin-top: 4vh;
        }
        div#titles hr{
            border: 2px solid #f40552;
            margin-right: 75%;
        }
        form#memo-form h3{
            font-size: 1.2em !important;
        }
        form#memo-form div#fill{
            width: 100% !important;
            padding: 10px !important;
        }
        form#memo-form div#fill textarea{
            max-width: 90% !important;
        }
        form#memo-form #send{
            box-shadow: 0 0 10px #fff;
            /* border: 1px solid #f40552; */
        }
        form#memo-form{
            margin: 20vh 10vw !important;
            width: 80vw !important;
        }
    }
</style>