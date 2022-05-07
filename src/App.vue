<script setup>
	import Header from "./components/Header.vue";
	import Main from "./components/Main.vue";
	import Feature from "./components/Feature.vue";
	import {Features,FAQ, Texts} from "./assets/data.js";
	import Nav from "./components/Nav.vue";
</script>

<template>
	<section id="head">
		<div id="container">
			<Header/>
			<Main />
		</div>
		<p id="ut">{{Texts().warning}}</p>
	</section>
	<section class="module">
		<h1>Features</h1>
		<div class="features-holder">
			<Feature v-for="(item, index) in Features()" :title=item.title :content=item.content :rgb=item.rgb :image=item.image />
		</div>
		<h2>{{Texts().nolimits}}<a href="https://vuejs.org/" target="_blank">VueJS</a></h2>
	</section>
	<section class="module" id="faq">
		<h1>F.A.Q.</h1>
		<div v-for="(item, index) in FAQ()" class="faq" :id=index >
			<h2 class="faq-title"><a href="#" >#</a>{{item.title}}</h2>
			<p class="faq-content">{{item.content}}</p>
		</div>
	</section>
	<footer>
		<h3>Copyrights ©2022 Loshido</h3>
		<Nav />
	</footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Rubik', sans-serif;
	color: #fff;
}
section#head{
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
	padding: 5% 15% 0 15%;
}
section.module h1{
	margin: 25px 0;
	text-decoration: underline;
	font-size: 36px;
}
section.module h2{
	margin: 50px;
	text-align: center;
	font-weight: 500;
}
section.module h2 a{padding: 5px;}
section.module h2 a:hover{
	text-decoration: none;
	box-shadow: 0 0 10px #f40552;
	background-color: #f40552;
}
section.module#faq{
	padding: 5% 15%;
	background-color: rgba(0, 0, 0, 0.3);
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
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
div.features-holder{
	width: 100%;
	height: 30vh;
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	align-items: center;
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
</style>
