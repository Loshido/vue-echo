<script>
export default {
    props: ["title","content","rgb","image"]
}
</script>
<template>
    <article :style="{ 'background-color': rgb, border: `3px solid ${rgb}` }">
        <img v-if="(image)" class="logo" :src=image.src :alt=image.alt />
        <h1>
            {{ title }}
        </h1>
        <p> {{ content }}</p>
    </article>
</template>

<style scoped>
    .logo{
        margin: 10px;
        width: 60px;
        height: 60px;
        float: left;
    }
    article{
        width: 300px;
        height: 30vh;
        border-right: none !important;
        border-left: none !important;
    }
    article h1{
        margin: 17px !important;
        text-decoration: none !important;
    }
    article p {
        margin: 10px;
        margin-top: 20px;
        font-size: 24px;
    }
</style>