<script setup>
// import { def } from '@vue/shared';
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
		<RouterLink class="nav-btn" to="/" active-class="active">Home</RouterLink>
		<RouterLink class="nav-btn" to="/shop" active-class="active">Scripts</RouterLink>
		<RouterLink class="nav-btn" active-class="active" to="/life/me">Life</RouterLink>
		<RouterLink class="nav-btn" active-class="active" to="/tools">Outils</RouterLink>
		<RouterLink class="nav-btn" active-class="active" to="/concept">Concept</RouterLink>
		<a class="nav-btn" href="https://fley-vuejs.web.app" target="_blank">Fley</a>
	</nav>
</template>

<style>
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
	a.nav-btn{
		margin: 8px;
		padding: 8px 16px;

		background: rgba(254, 254, 225, 0.1);
		color: #fff;
		text-decoration: none;
		transition: background-color .2s ease-in-out;
	}
	a.nav-btn:hover{
		/* background-color: #f40552; */
		background: #f40552;
		background: -webkit-linear-gradient(0deg, #f40552 0%, rgba(244, 5, 82, 0.8) 100%);
		background: linear-gradient(180deg, #f40552 0%, rgba(244, 5, 82, 0.8) 100%);
		transition: background .2s ease-in-out;
	}
	@media (max-width: 1000px){
		nav{
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>