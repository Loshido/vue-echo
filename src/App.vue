<script setup>
	import Header from "./components/Header.vue";
	import Nav from "./components/Nav.vue";
	import { RouterView } from 'vue-router'
</script>

<template>
	<Header id="header" v-if="concept" />
	<RouterView />
	<footer v-if="concept">
		<h3>Copyrights ©2022 Loshido</h3>
		<Nav />
	</footer>
</template>

<script>
export default {
	data(){
		return {
			concept: true,
			background: ""
		}
	},
	watch:{
		background(v){
			alert(v)
		},
		concept(value){
			if(value) {
				document.body.style.backgroundColor = "#161923";
				document.body.style.backgroundSize = "15%"
				document.body.classList.remove("pattern-cross-dots-xl")
			} else {
				document.body.style.backgroundColor = "#002556";
				document.body.style.backgroundSize = 0
				document.body.classList.add("pattern-cross-dots-xl")
			};
		}
	},	
	mounted(){
		this.$router.afterEach(() => {
			this.concept = !window.location.href.includes("concept")
		})
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Koulen&family=Rubik:wght@400;700&display=swap');
@import url(./ext/pattern.css);

.link:hover{
	text-decoration: none;
	box-shadow: 0 0 10px #f40552;
	
	background-color: #f40552;
}
.link{
	padding: 5px;
}
*{
	margin: 0;
	padding: 0;

	box-sizing: border-box;
	scroll-behavior: smooth;

	font-family: 'Rubik', sans-serif;
	color: #fff;
}
@media (max-width: 1300px) {
	section#head{
		background-image: none !important;
		height: max-content !important;
	}
	#container{
		background-image: none !important;
		height: max-content !important;
	}
	p#ut{
		width: unset !important;
		padding: 0 5%;
		margin: 0 !important;
		text-align: center !important;
		transform: none;
	}
	section.module h1#features-title{
		font-size: 2.5rem;
		padding: 0 !important;
		text-align: center;
	}
	div.features-holder{
		width: 100vw !important;
		height: max-content !important;
		display: flex;
		flex-direction:column !important;
		justify-content:space-around;
		align-items: center;
	}
	section.module{
		padding: unset !important;
	}
	section.module h2{
		padding: 0 5%;
	}
	section.module#faq h1{
		padding: 5%;
	}
}
section#head{
	top: 0;
	width: 100%;
	height: 70vh;
	background-image: url(./assets/bg.jpg);
	background-size: 100%;
	background-position: 0 -150px;
}
#container{
	height: 70vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url(./assets/holder.png);
	background-size: 100px;
	background-repeat: repeat-x;
	background-position: bottom;
}
p#ut{
	color: rgb(139, 139, 139);
	width: 30vw;
	text-align: center;
	margin: 0 35vw;

	transform: translateY(-25px);
}
section.module{
	padding: 2em 5em 0 5em;
}
section.module h1#features-title{
	font-size: 2.5em;
	padding-left: 4em;
}
section.module h1{
	margin: 25px 0;
	text-decoration: underline;
	font-size: 36px;
}
section.module h2{
	margin: 50px 0;
	text-align: center;
	font-size: 1.4em;
	font-weight: 500;
}
div.features-holder{
	width: 100%;
	height: 35vh;
	display: flex;
	flex-direction: row;
	justify-content:space-around;
	align-items: center;
}
section.module#faq{
	padding: 5% 15%;
	background-color: rgba(0, 0, 0, 0.4);
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.4);
}
section.module#faq .faq-content{
	padding: 10px;
}
section.module#faq .faq-title a{
	padding: 2px 5px;
	color: rgb(163, 163, 163);
}
section.module#faq .faq-title{
	text-align: unset;
	margin: 10px;
}
section.module#faq .faq:hover{
	transition: transform .3s ease-in;
}
section.module#faq .faq:hover{
	transform: translateX(.5%);
	transition: transform .3s ease-out;
}


footer{
	margin: 25px 10vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
footer h3{
	font-weight: 300;
	color: rgb(151, 151, 151);
}

@media (max-width: 800px) {

	footer{
		flex-direction: column;
	}
	footer nav {
		display: none !important;
	}
	footer h3{
		margin: 1rem;
	}
}
@keyframes clicked {
    0% {background-color: #f40552;}
    25% {background-color: #C10A47;}
    50% {background-color: #850F3B;}
    75% {background-color: #4E142F;}
    100% {background-color: #161923;}
}
</style>
