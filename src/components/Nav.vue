<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
		<a href="https://vuejs.org/" target="_blank">VueJS</a>
		<a href="https://firebase.google.com/" target="_blank">Firebase</a>
		<a href="https://github.com/loshido" target="_blank">Github</a>
		<RouterLink to="/" active-class="active">Home</RouterLink>
		<RouterLink to="/new" active-class="active">New</RouterLink>
	</nav>
</template>

<style scoped>
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