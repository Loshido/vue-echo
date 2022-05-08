<script setup>
	import Header from "./components/Header.vue";
	import Nav from "./components/Nav.vue";
	// import Home from "./components/Home.vue";
	import { RouterView } from 'vue-router'
</script>

<template>
	<Header id="header"/>
	<RouterView />
	<footer>
		<h3>Copyrights ©2022 Loshido</h3>
		<Nav />
	</footer>
</template>

<style>
@import url(./assets/home.css);
</style>
