<template>
    <h2>Aujourd'hui nous sommes le {{today.getDate()}} {{toMonth(today.getMonth())}}, en {{today.getFullYear()}} ✨.
        <h4>Et je suis né le {{first.getDate()}} {{toMonth(first.getMonth())}} {{first.getFullYear()}}. Cela fait donc <a href="#tab" id="weeks" v-text="weeks"></a> semaines que je vie 🦦.</h4>
    </h2>
    <h3>Chacun de ces cubes représentent une semaine de ma vie</h3>
    <div id="tab">
        <div class="week" v-for="week in weeks" :key="week" @mouseover="CubeClicked(week)" :id="week+'cube'">
            <span class="tooltip">{{toExposed(getDay(this.first,week))}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                weeks: 0,
                first: new Date(2006,1,3,0,0,0,0),
                today: new Date(),
            }
        },
        methods: {
            toMonth(x){
                const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
                return month[x]
            },
            diffDays(x,y){
                return Math.ceil(Math.abs(x - y) / (1000 * 60 * 60 * 24));
            },
            getDay(init,x){
                const date = new Date((x*7)*(1000 * 60 * 60 * 24))
                const final = new Date(init.getTime()+date.getTime())
                return final;
            },
            toExposed(x){
                const date = x.getDate();
                const month = this.toMonth(x.getMonth())
                const year = x.getFullYear()
                x.setDate(x.getDate()+7)
                const endOfWeek = x.getDate()
                return date+"-"+endOfWeek+ " " +month+" "+year
            },
            CubeClicked(key){
                const node = document.getElementById(key+"cube");
                node.style.animation = "clicked 1s ease-in-out";
                setTimeout(() => {
                    node.style.animation = "";
                },1000)
            }
        },
        created(){
            this.weeks = Math.floor(this.diffDays(this.first,this.today)/7)
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
        margin: 25px;
    }
    h2{
        margin: 5vh 15vw;
        margin-top: 15vh;
    }
    div#tab{
        padding: 25px;
        margin: 10vh 20vw;
        margin-top: 0;
        width: 60vw;
        height: auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        
        background-color: #161923;
        box-shadow: 0 0 100px rgba(255, 255, 255,0.2);
    }
    div.week{
        margin: 10px;
        width: 30px;
        height: 30px;
        
        border: 3px solid #f40552;
    }
    div.week .tooltip{
        position: absolute;
        margin-top: -10px;
        margin-left: 35px;
        padding: 10px;

        width: max-content;
        height: 40px;

        visibility: hidden;
        background-color: rgba(255, 255, 255,1);
        color: #161923;

        text-align: center;
        
    }
    div.week:hover .tooltip{
        visibility: visible;
    }
    span#weeks{
        text-decoration: underline;
    }
</style>