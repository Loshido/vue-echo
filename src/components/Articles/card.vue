<template>
    <article>
        <div id="img">
            <h1>Title</h1>
        </div>
        <div id="content">
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore temporibus earum eum expedita libero distinctio</p>
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
        height: 100%;
        width: 100%;
    }
    div#img{
        height: 55%;
        background-color: #fff;
        margin: 5%;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    h1{
        margin: 0.5em;
        font-size: 1.6em;
        position: fixed;
        color: black;
        float: left;
    }
    div#content p{
        font-size: 1.2em;
    }
    div#content{
        background-color: rgba(254, 254, 225, 0.2);
        height: 40%;
        margin: 5%;
        margin-top: 0;
        padding: 5%;
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