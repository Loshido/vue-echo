<script setup>
    import Main from "./Home/Main.vue";
	import Feature from "./Home/Feature.vue";
	import Providers from "./Home/Providers.vue"
	import {Features,FAQ, Texts} from "../assets/data.js";
</script>
<template>
    <section id="head">
		<div id="container">
			<Main />
		</div>
		<p id="ut" v-html="Texts.warning"></p>
	</section>
	<section class="module">
		<h1 id="features-title">Features</h1>
		<div class="features-holder">
			<Feature 
				v-for="item in Features()"
				:title="item.title"
				:content="item.content"
				:rgb="item.rgb"
				:image="item.image"
			/>
		</div>
		<h2 v-html="Texts.nolimits">
		</h2>
	</section> 
	<Providers />
	<section class="module" id="faq">
		<h1>F.A.Q.</h1>
		<div v-for="(item, index) in FAQ()" class="faq" :id="index" >
			<h2 class="faq-title">
				<a href="#" class="link">#</a>
				{{item.title}}
			</h2>
			<p class="faq-content">{{item.content}}</p>
		</div>
	</section>
</template>
