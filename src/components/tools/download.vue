<template>
    <h2 id="title">Cet outil permet de calculer le temps que prend un téléchargement d'une taille donnée en fonction d'un débit donnée.</h2>
    <h1 class="warning">⚠️ En Construction ⚠️</h1>
    <h3 class="warning">Ne marchera pas tant que la version final soit prête.</h3>
    <div id="module-container">
        <form id="poids">
            <h2 class="title-box">Poids</h2>
            <div class="box-div">
                <div id="input">
                    <label for="values">Taille</label>
                    <input type="number" name="values" id="" v-model="size.value">
                </div>
                <div id="select">
                    <label for="units">Unités</label>
                    <select name="units" v-model="size.unit">
                        <option disabled value="">Please select one</option>
                        <option value="1">ko</option>
                        <option value="0.001">Mo</option>
                        <option value="0.000001">Go</option>
                    </select>
                </div>
            </div>
            
        </form>
        <form id="entrer">
            <h2 class="title-box">Débits</h2>
            <div class="box-div">
                <div id="input">
                    <label for="values">Vitesse</label>
                    <input type="number" name="values" id="" v-model="speed.value">
                </div>
                <div id="select">
                    <label for="units">Unités</label>
                    <select name="units" v-model="speed.unit">
                        <option disabled value="">Please select one</option>
                        <option value="1">ko/s</option>
                        <option value="0.001">Mo/s</option>
                        <option value="0.000001">Go/s</option>
                    </select>
                </div>
            </div>
            
        </form>
        <form id="sortie">
            <h2 class="title-box">Temps</h2>
            <div class="box-div">
                <div id="input">
                    <label for="values">Durée</label>
                    <input type="number" name="values" id="" v-model="time.value">
                </div>
                <div id="select">
                    <label for="units">Unités</label>
                    <select name="units" v-model="time.unit">
                        <option disabled value="">Please select one</option>
                        <option value="1">Secondes</option>
                        <option value="60">Minutes</option>
                        <option :value="60*60">Heures</option>
                    </select>
                </div>
            </div>
        </form>        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                size: {
                    value: 0,
                    unit: null
                },
                speed: {
                    value: 0,
                    unit: null
                },
                time: {
                    value: 0,
                    unit: null
                },
            }
        },
        watch: {
            size(a){
                console.log(a)
            },
            speed(a){
                console.log(a)
            },
            time(a){
                console.log(a)
            },
        },
        methods: {

        }
    }
</script>

<style scoped>

    h2.title-box{
        margin: 5%;
    }
    
    div.box-div input[type="number"]{
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-radius: 0px;
    }
    div.box-div #input{width: 40%;}
    div.box-div select, div.box-div input[type="number"]{
        padding: 2%;
        font-size: 1.3em;
        font-family: "JetBrains" sans-serif;
    }
    div.box-div #select{
        width: 40%;
        }
    div.box-div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 90%;
        height: 70%;
        margin: 5%;
    }

    div#module-container form select option{
        background-color: transparent;
        color: black;
        font-family: "JetBrains" sans-serif;
    }
    div#module-container form select{
        background-color: transparent;
    }
    div#module-container #form-container form{
        width: calc(100% - 4vw);
        height: calc(100% - 6vh);
        /* border: 1px solid black; */
        margin: 3vh 2vw;
    }
    div#module-container{
        background-color: rgba(255, 255, 255,0.2);
        border-radius: 15px;
        backdrop-filter: blur(2px);

        margin: 10vh 20vw;
        width: 60vw;
        height: 35vh;

        display: inline-flex;
        flex-direction: row;
        justify-content: space-around;
    }
    h2#title{
        margin: 15vh 5vw 0 5vw;
        max-width: 30%;
    }
    .warning{
        text-align: center;
    }

    @media (max-width: 1300px) {
        h2#title{
            text-align: center;
            margin: 25px !important;
            max-width: none !important;
        }
        h3.warning{
            margin: 0 10px;
        }
        div#module-container{
            backdrop-filter: blur(0px);
            margin: 25px 5vw !important;
            width: 90vw !important;
            min-height: 35vh;
            height: auto !important;

            flex-direction: column !important;
        }
    }
</style>