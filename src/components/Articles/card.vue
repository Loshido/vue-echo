<template>
    <article>
        <div>
            <main>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore temporibus earum eum expedita libero distinctio</p>
            </main>
            <a href="#">En savoir plus</a>
        </div>
    </article>
</template>

<style scoped>
    article:hover div{
        transform: scale(1.05);
        transition: transform .2s ease-out;
    }
    article{
        height: 100%;
        width: 100%;
    }
    div{
        background-color: rgba(254, 254, 225, 0.2);
        height: 90%;
        margin: 5%;
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