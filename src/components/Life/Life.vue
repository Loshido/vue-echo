
<template>
    <h2>Aujourd'hui nous sommes le {{today.getDate()}} {{toMonth(today)}}, en {{today.getFullYear()}} ✨.
        <h4>Et je suis né le {{first.getDate()}} {{toMonth(first)}} {{first.getFullYear()}}. Cela fait donc <a href="#tab" id="weeks" v-text="getSpecificWeeks(first)"></a> semaines que je vies 🦦.</h4>
    </h2>
    <h3 v-if="time=='me'">Chacun de ces cubes représentent une semaine de ma vie</h3>
    <h3 v-else-if="time.length > 12">Vous avez saisis {{getNewDate(time)}}</h3>
    <h3 v-else-if="input!=''">Vous avez saisis {{getNewDate(input)}}</h3>
    <div id="aside">
        <form>
            <label>
                Saissisez votre date de naissance.<br><hr>
                <input 
                    type="date" 
                    id="date" 
                    v-model="input"
                />
            </label>
        </form>
    </div>
    <div id="tab">
        <div class="week" v-for="week in weeks" :key="week" @mouseover="CubeClicked(week)" :id="week+'cube'">
            <span class="tooltip">{{toExposed(current,week)}}</span>
        </div>
    </div>
</template>

<script>
import { toNumber } from "@vue/shared"

    export default {
        props: ['time'],
        data() {
            return {
                weeks: 0,
                first: new Date(2006,1,3,0,0,0,0),
                today: new Date(),
                current: new Date(2006,1,3,0,0,0,0),
                input: ""
            }
        },
        watch: {
            input(a){
                var temp = new Date(a).getTime()
                console.log(new Date(a).getFullYear())
                if(new Date(a).getFullYear() > 1900) {
                    // this.$router.push("/life/"+temp)
                    this.$router.push({
                        name: 'life', params: { time: temp}
                    })
                    setTimeout(() => {
                        location.reload()
                    }, 100); 
                }
            }
        },
        methods: {
            getSpecificWeeks(x){
                return Math.ceil(this.diffDays(x,this.today)/7);
            },
            toMonth(x){
                const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
                return month[x.getMonth()]
            },
            diffDays(x,y){return Math.ceil(Math.abs(x - y) / (1000 * 60 * 60 * 24));},
            addDay(d,x){d.setDate(d.getDate()+x);return d},
            getDay(x){
                var date = new Date(this.current.getTime())
                date = this.addDay(date,x*7-7)
                if(x!=1){
                    while(date.getDay()!=1){date = this.addDay(date,-1)}
                };
                return date;
            },
            toExposed(x){
                const exposed = {date: x.getDate(),month: this.toMonth(x),year: x.getFullYear()}
                x = this.addDay(x,7);
                while(x.getDay()!=1){x = this.addDay(x,-1);};
                const endOfWeek = x.getDate();
                return exposed.date+"-"+endOfWeek+ " " +exposed.month+" "+exposed.year;
            },
            CubeClicked(key){
                const node = document.getElementById(key+"cube");
                node.style.animation = "clicked 1s ease-in-out";
                setTimeout(() => {node.style.animation = "";},1000)
            },
            getNewDate(x){
                if(typeof(x)=="string"){x = toNumber(x)}
                if (!(x instanceof Date)){
                    x = new Date(x)
                }
                return x.getDate() + " " + this.toMonth(x) + " " + x.getFullYear()
            }
        },
        created(){
            if(this.time != 'me'){
                this.current = new Date()
                this.current.setTime(this.time)
            }
            this.weeks = Math.ceil(this.diffDays(this.current,this.today)/7);
        }
    }
</script>

<style scoped>
    input{
        margin: 1rem;
        padding: 1rem;
        background-color: #161923;
        border: 1px solid #fff;
        max-width: 85%;
        width: 85%;
    }
    div#aside{
        position: fixed;
        margin: 0 2.5vw;
        padding: 1.5vh .5vw;

        background-color: #161923;
        box-shadow: 0 0 15px rgba(255, 255, 255,0.2);
        max-width: 15vw;
    }

    h3{
        text-align: center;
        margin: 25px;
        }
    h2{
        margin: 5vh 15vw;
        margin-top: 15vh;
    }
    @media (max-width: 1000px) {
        h2{
            margin: 18vh 0 0 0;
            text-align: center;
            font-size: .9rem;
        }
        h3{
            font-size: .9rem;
        }
        div#aside{
            max-width: none;
            width: 80vw;
            margin: 3vh 10vw;
            position: static;
            /* width: max-content; */
        }
        div#aside form{
            text-align: center;
        }
        div#tab{
            margin: 1vh 5vw !important;
            width: 90vw !important;
        }
        div.week .tooltip{
            margin: -50px 0 0 -50px !important;
        }
    }

    div.week:hover .tooltip{visibility: visible;}
    span#weeks{text-decoration: underline;}
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
        max-height: 40px;

        visibility: hidden;
        background-color: rgba(255, 255, 255,1);
        color: #161923;

        text-align: center;
        
    }
</style>