<template>
    <div id="tools-head">
        <h2>Hey 👋,</h2>
        <h3>dans cette partie vous pouvez trouver des modules permettant de prévisualliser des propriétés css</h3>
    </div>
    <div id="tools-container">
        <div class="tools-card">
            <div class="tools-card-img">
                <div class="tools-img"></div>
                <h1><code>display: flex;</code></h1>
            </div>
            <p>
                Outils pour travailler l'affichage "flex", propriétés et ses attributs.
            </p>
            <div class="tools-access">En savoir plus</div>
        </div>
        <div class="tools-card">
            <div class="tools-card-img">
                <div class="tools-img"></div>
                <h1><code>display: grid;</code></h1>
            </div>
            <p>
                Outils pour travailler l'affichage "grid", propriétés et ses attributs.
            </p>
            <div class="tools-access">En savoir plus</div>
        </div>
        <div class="tools-card">
            <div class="tools-card-img">
                <div class="tools-img"></div>
                <h1>position: ?;</h1>
            </div>
            <p>
                Outils pour travailler les types de positionnement d'un élément.
            </p>
            <div class="tools-access">En savoir plus</div>
        </div>
        <div class="tools-card">
            <div class="tools-card-img">
                <div class="tools-img"></div>
                <h1>Truc bidule</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque, 
                ex dolores iste odio commodi.
            </p>
            <div class="tools-access">En savoir plus</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div#tools-head{
        margin: 25px 10vw;
    }
    div#tools-container div.tools-card p{
        margin: 10px;
        padding: 10px;

        background-color: rgba(225,225,225,0.1);
    }
    div#tools-container div.tools-card h1{
        margin: 15px;
        padding: 8px 8px;
        width: fit-content;
        background-color: rgba(225,225,225,0.2);

        position: relative;
        bottom: 2.5em;
        
    }
    div#tools-container div.tools-card .tools-card-img{
        width: 100%;
        height: 100%;
    }
    div#tools-container div.tools-card .tools-card-img .tools-img{
        width: 100%;
        height: 100%;
        background-color: blue;
    }
    div#tools-container div.tools-card{
        width: 100%;
        min-height: 100%;
        height: auto;

        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60% 20% 20%;
        align-items: center;
    }
    div#tools-container div.tools-card .tools-access{
        width: 80%;
        height: 50px;
        margin: 10px 10%;
        background-color: blue;

        text-align: center;
        font-size: 1.5em;
        padding: 10px;
    }
    div#tools-container{
        width: 90vw;
        min-height: 50vh;
        margin: 50px 5vw;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        column-gap: 50px;
    }
</style>