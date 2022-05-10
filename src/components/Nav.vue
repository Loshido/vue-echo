<script setup>
import { def } from '@vue/shared';
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
		<a href="https://vuejs.org/" target="_blank">VueJS</a>
		<a href="https://firebase.google.com/" target="_blank">Firebase</a>
		<a href="https://github.com/loshido" target="_blank">Github</a>
		<RouterLink to="/" active-class="active">Home</RouterLink>
		<RouterLink to="/shop" active-class="active">Articles</RouterLink>
		<!-- <a v-if="pinner" id="pin" @click="TogglePin"><p>📌</p></a> -->
	</nav>
</template>

<!-- <script>
export default{
	props: ["pinner"],
	data(){
		return{
			isPinned: false
		}
	},
	methods: {
		TogglePin(){
			this.isPinned = !this.isPinned
			console.log(this.isPinned)
			const node = document.querySelector("#pin p")
			const header = document.querySelector("#header")
			const head = document.querySelector("#head")
			console.log(header)
			if(this.isPinned){
				node.style.transform = "rotateZ(50deg)";
				head.style.transform = "translateY(-10vh)";
				header.style.position = "sticky";
				header.style["background-color"] = "rgba(0, 0, 0, 0.40)";
			} else {
				header.style["background-color"] = "rgba(0, 0, 0, 0.15)";
				node.style.transform = "none";
				header.style.position = "absolute";
				head.style.transform = "none";
			}
		}
	}
}
</script> -->

<style scoped>
	#pin:hover{
		background-color: rgba(254, 254, 225, 0.5);
		transition: background-color .2s ease-in-out;
	}
	#pin{
		user-select: none;
		cursor: pointer;
		padding: 5px;
	}
	.active{
		border-bottom: 3px solid #f40552;
	}
    nav{
		transition: all .3s ease-in-out;
		height: 100%;
		width: auto;

		display: flex;
		align-items: center; 
		flex-direction: row; 
	}
	nav a{
		margin: 8px;
		padding: 8px 16px;

		background: rgba(254, 254, 225, 0.1);
		color: #fff;
		text-decoration: none;
		transition: background-color .2s ease-in-out;
	}
	nav a:hover{
		background-color: #f40552;
		transition: background-color .2s ease-in-out;
	}
</style>