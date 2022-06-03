<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  	<header :class="class">
		<h1>
			<a>Echo</a>
		</h1>
		<Nav />
	</header>
</template>

<script>
	export default {
		data(){
			return {
				class: ""
			}
		},
		created(){
			this.$router.afterEach(() => {
				(this.$route.name == "home")?this.class = "head-home":this.class = "";
			})
		}
	}
</script>

<style scoped>
	header.head-home{
		position: absolute;
		top: 0;
		z-index: 1;
	}
	header{
		/* top: 0;
		z-index: 1;
		position: absolute; */
		padding: 0 10vw;

		width: 100vw;
		height: 10vh;

		/* background-color: rgba(0, 0, 0, 0.15); */
		background-color: rgba(0, 0, 0, 0.3);

		display: flex;
    
		justify-content: space-between; 
		align-items: center; 
		flex-direction: row; 

	}
	h1{
		font-size: 64px;
    	font-weight: 100;

		text-decoration: none;
		
		animation: anim 70s infinite;
	}
	@keyframes anim {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 500px -500px;
        }
        100% {
            background-position: 1000px -1000px;
        }
    }
@media (max-width: 1000px){
	header{
		position: initial;
		justify-content: center; 
		min-height: 15vh;
		height: auto;
		max-height: 30vh;
		/* height: 15vh; */
	}
	header h1{
		display: none;
	}
}
</style>
