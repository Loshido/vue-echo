<template>
    <section>
        <textarea cols="60" rows="10" v-model="text"></textarea>
        <div id="handler">
            <article>
                <h1>Nombre de mots : <span v-text="words"></span></h1>
            </article>
            <article>
                <h1>Nombre de lettres : <span v-text="letters"></span></h1>
            </article>
            <article>
                <h1>Taille : <span v-text="size"></span> <span v-if="(typeof(size)!='string')">octets</span></h1>
            </article>
            <div id="btn">
                <button @click="toCase('low')">lower</button>
                <button @click="toCase('up')">UPPER</button>
                <button @click="toCase('camel')">camelCase</button>
                <button @click="toCase('pascal')">PascalCase</button>
                <button @click="toCase('snake')">snake_case</button>
                <button @click="toCase('kebab')">kebab-case</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                words: 3,
                letters: 12,
                size: 3,
                text: "Ton texte ici.",
            }
        },
        watch: {
            text(a,b){
                this.letters = this.getLetterInString(a)
                this.size = this.getSizeInBytes(a)
                this.words = this.getWordInString(a)
            }
        },
        methods: {
            toCase(type){
                if(type == "up"){
                    this.text = this.text.toUpperCase()
                } else if (type == "low"){
                    this.text = this.text.toLowerCase()
                } else if (type == "camel"){
                    this.text = this.text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                        return index === 0 ? match.toLowerCase() : match.toUpperCase();
                    }); // from stackoverflow (Christian C. Salvadó)
                } else if (type == "pascal"){
                    this.text = this.text
                        .split(' ')
                        .map(word => word[0]
                        .toUpperCase()
                        .concat(word.slice(1)))
                        .join('');
                    // stackoverflow (Kobi)
                } else if (type == "snake"){
                    this.text = this.text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        .map(x => x.toLowerCase())
                        .join('_');
                } else if (type == "kebab") {
                    this.text = this.text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        .map(x => x.toLowerCase())
                        .join('-');
                }
            },
            getLetterInString(obj){
                return obj.split( '' ).filter( c => c != ' ' ).length;
            },
            getWordInString(obj){
                const arr = obj.split(' ');
                return arr.filter(word => word !== '').length;
            },
            getSizeInBytes(obj) {
                let str = null;
                if (typeof obj === 'string') {
                    str = obj;
                } else {
                    str = JSON.stringify(obj);
                }
                const bytes = new TextEncoder().encode(str).length;
                if(bytes > 1000){
                    return bytes/1000 + " ko";
                }
                return bytes;
            }
        }
    }
</script>

<style scoped>
    @media (max-width:1000px) {
        section{
            width: 90vw !important;
            margin: 5vh 5vw !important;
            flex-direction: column;
        }
        section textarea{
            margin: 0 !important;
            max-width: 90vw !important;
        }
        section div#handler{
            margin-top: 20%;
            min-width: 90vw !important;
            min-height: 40vh !important;
            max-height: 90vh !important;
        }
        section div#handler div#btn{
            margin: 10px !important;
        }
    }
    section{
        width: 80vw;
        min-height: 50vh;
        margin: 10vh 10vw;
        margin-top: 20vh;

        display: inline-flex;
        justify-content: space-around;
    }
    section textarea{
        max-width: 35vw;
        max-height: 30vh;
        margin: 10vh 0;
        background-color: rgba(244, 5, 82,0.05);
        backdrop-filter: blur(5px);
        padding: 15px;
        font-size: 1.7em;
        border: 1.5px solid #f40552;
        border-radius: 10px;
    }
    section div#handler{
        min-width: 20vw;
        max-width: 40vw;
        min-height: 35vh;
        max-height: 50vh;
        /* height: 50vh; */
        background-color: rgba(105, 17, 45, 0.1);
        border: 2.5px solid #f40552;
        border-radius: 10px;
    }
    section div#handler div#btn button:hover{
        background-color: #f40552;
        transition: background .3s ease-out;
    }
    section div#handler div#btn button{
        cursor: pointer;
        padding: 7.5px;
        margin: 5px;
        background: transparent;
        border: #f40552 1px solid;
        font-size: 1em;
        transition: background .3s ease-in;
    }
    section div#handler div#btn{
        margin: 35px 10px;
        background-color: rgba(105, 17, 45, 0.3);
        border-radius: 10px;
        border: 1px solid #ffffff;
        padding: 5px;
        max-width: 400px;
    }
    section div#handler article{
        margin: 35px;
        background-color: rgba(105, 17, 45, 0.3);
        border-radius: 10px;
        border: 1px solid #ffffff;
        padding: 20px;
        max-width: 350px;
    }
</style>