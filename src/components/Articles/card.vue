<script>
export default{
    props: ["title","content","image"],
    methods: {
        isEmpty(str){
            return(str.length === 0);
        }
    }
}
</script>

<template>
    <article>
        <div id="img">
            <h1>{{title}}</h1>
            <img :src=image.src :alt=image.alt>
            
        </div>
        <div id="content">
            <main>
                <p>{{content}}</p>
            </main>
            <a href="#">En savoir plus</a>
        </div>
    </article>
</template>

<style scoped>
    article:hover{
        transform: scale(1.025);
        transition: transform .2s ease-out;
    }
    article{
        max-width: 40vw;
        height: 100%;
        width: 100%;
    }
    div#img img{
        z-index: 1;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    div#img{
        position: relative;
        height: 55%;
        background-color: #fff;
        margin: 5%;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    h1{
        z-index: 2;
        position: absolute;
        margin: 0.5em;
        font-size: 1.6em;
        /* position: fixed; */
        color: #f40552;
        float: left;
    }
    div#content p{
        font-size: 1.2em;
        padding-top: 3%;
    }
    div#content{
        background-color: rgba(254, 254, 225, 0.2);
        height: 40%;
        margin: 5%;
        margin-top: 0;
        padding: 5%;
        padding-top: 0;
        transition: transform .2s ease-in;

        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    article div a{
        font-size: 24px;
        text-align: center;
        text-decoration: none;

        padding: 5%;
        background-color: rgba(244,5,82,0.1);
        background-image: url(../../assets/back.png);
        background-size: 50%;
        border: 2px solid #f40552;

        transition: background-color .1s ease-out;
    }
    article div:hover a{
        background-color: #f40552;
        transition: background-color .1s ease-in;
    }
</style>