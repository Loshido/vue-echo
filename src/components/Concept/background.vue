<template>
    <div id="background">
        <div v-for="n in 5*8" :class="'bg-box '+getBox(n)"/>
    </div>
</template>

<script>
    export default {
        methods: {
            getBox(n){
                if (n == 1) {return "top-left"}
                else if( n == 8) {return "top-right"}
                else if( n == 40) {return "bottom-right"}
                else if (n == 33) {return "bottom-left"}
                
                const sides = [["top",2,3,4,5,6,7],["left",9,17,25],["right",16,24,32],["bottom",34,35,36,37,38,39]]
                for(const k in sides){
                    if(sides[k].includes(n)){
                        return sides[k][0]
                    }
                }
                return ""
            }
        }
    }
</script>

<style scoped>
div#background{
    position: absolute;
    top: 0;
    z-index: -1;
    box-shadow: inset 11px 10px 100px 100px rgba(0,37,86,1);
    background-color: #001D42;
    margin: 5vh 5vw;
    padding: 5vh 5vw;
    height: 90vh;
    width: 90vw;
    display: grid; 
    
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(8, 1fr);
    
    gap: 0px;
}


div#background div.bg-box{
    border: 1px solid rgba(0, 45, 105,0.25);
}
div#background div.left{border-left: none;}
div#background div.right{border-right: none;}
div#background div.top{border-top: none;}
div#background div.bottom{border-bottom: none;}
div#background div.top-left{border-top: none;border-left: none;}
div#background div.top-right{border-top: none;border-right: none;}
div#background div.bottom-left{border-bottom: none;border-left: none;}
div#background div.bottom-right{border-bottom: none;border-right: none;}
</style>