<template>
    <hgroup>
        <h1 class="warning">⚠️ En Construction ⚠️</h1>
        <h3 class="warning">Ne marchera pas tant que la version finale soit prête.</h3>
    </hgroup>
    <section>
        <div id="color"></div>
        <div id="handler">
            <input type="color" v-model="color">
            <article>
                <h1>Nom : <span v-text="completeInfo[1]"></span></h1>
            </article>
            <article>
                <h1>Hexadecimal : <span v-text="color"></span></h1>
            </article>
            <article>
                <h1>Rgb : <span v-text="completeInfo[0]"></span></h1>
            </article>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                color: "",
                completeInfo: [0,0]
            }
        },
        watch: {
            color(a){
                const node = document.querySelector("section div#color")
                node.style.backgroundColor = a
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 1000px) {
        hgroup{
            position: static !important;
            margin: 25px 25px 0 25px;
            text-align: center; 
        }
        hgroup h1{
            font-size: 1.7em;
        }
        section{
            flex-direction: column;
            margin: 2vh 2vw !important;
            width: 96vw !important;
        }
        section div#color{
            margin: 50px;
        }
        section div#handler{
            max-width: 95vw;
        }
        section div#handler input{
            width: 70vw !important;
        }
    }
    hgroup{
        position: absolute;
        top: 20vh;
        left: 25vw;
    }
    section{
        margin: 10vh 10vw;
        width: 80vw;
        min-height: 50vh;
        margin-top: 20vh;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
    section div#color:hover{
        border-width: 1.5px;
        transition: border .1s ease-in;
    }
    section div#handler{
        min-width: 20vw;
        min-height: 50vh;
        background-color: rgba(244, 5, 82,0.15);
        border: 1px solid #f40552;
        border-radius: 10px;
    }
    section div#color{
        width: 250px;
        height: 250px;
        border-radius: 100%;
        background-color: #fff;
        border: 3px #f40552 solid;
        transition: border .1s ease-out;
    }
    section div#handler article{
        margin: 35px;
        background-color: rgba(105, 17, 45, 0.3);
        border-radius: 10px;
        border: 1px solid #ffffff;
        padding: 20px;
        max-width: 350px;
    }
    section div#handler input{
        margin: 35px 35px 0 35px;
        background-color: transparent;
        border: none;
        max-width: 350px;
        width: 350px;
        height: 100px;
    }
</style>