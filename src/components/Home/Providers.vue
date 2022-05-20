<template>
    <section>
        <h1>Ce site est crée avec VueJS <br>et finalement déployer grâce à Firebase</h1>
        <div id="provider-container">
            <article>
                <a href="https://vuejs.org/" target="_blank"><img src="../../assets/providers/vuejs.png" alt="VueJS"></a>
                <h2 id="vuejsh2">
                    Un framework JavaScript Évolutif, Accessible (HTML, CSS, JavaScript), 
                    Polyvalent & Performant (Optimisation, DOM virtuel)
                </h2>
            </article>
            <article>
                <a href="https://firebase.google.com/" target="_blank"><img src="../../assets/providers/firebase.png" alt="Firebase"></a>
                <h2 id="firebaseh2">
                    Un service de google proposant une gestion d'applications et des services similaire à Supabase.
                </h2>
            </article>
            <article>
                <a href="https://github.com/" target="_blank"><img src="../../assets/providers/github.png" alt="Github"></a>
                <h2>
                    Github est un forum internationnal qui permet de collaborer et de disposer des projets open-sources.
                </h2>
            </article>
        </div>
    </section>
</template>

<style scoped>
    section{
        /* background-color: #fff; */
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 100px rgb(0 0 0 / 15%);
        height: 60vh;
        width: 100vw;
        padding: 7vh 10vw;
    }
    div#provider-container article h2#vuejsh2{
        color: #273E51;
    }
    div#provider-container article h2#firebaseh2{
        color: rgb(90, 90, 90);
    }
    div#provider-container article h2{
        padding: .5em;
        color: rgb(34, 34, 34);
        text-align: center;
    }
    div#provider-container article img{
        cursor: pointer;
        width: 100%;
        height: 40%;
        object-fit:scale-down;
    }
    div#provider-container article{
        border-radius: 10px;
        width: 25%;
        height: 100%;
        /* padding: 10%; */
        background-color: rgba(255, 255, 255, 0.75);
    }
    div#provider-container{
        margin: 5%;
        width: 90%;
        height: calc(90% - 3em);

        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
</style>