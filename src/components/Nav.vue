<script setup>
import { def } from '@vue/shared';
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
		<!-- <a href="https://vuejs.org/" target="_blank">VueJS</a>
		<a href="https://firebase.google.com/" target="_blank">Firebase</a>
		<a href="https://github.com/loshido" target="_blank">Github</a> -->
		<RouterLink to="/" active-class="active">Home</RouterLink>
		<RouterLink to="/shop" active-class="active">Scripts</RouterLink>
		<RouterLink active-class="active" to="/life/me">Life</RouterLink>
		<RouterLink active-class="active" to="/tools">Outils</RouterLink>
		<a href="https://fley-vuejs.web.app" target="_blank">Fley</a>
		<!-- <RouterLink to="/auth" id="user"  active-class="active-user"><img :src="avatar" alt="Profil Picture"></RouterLink> -->
	</nav>
</template>

<script>
	import userAvatar from '../assets/user.png'
	import { getAuth, onAuthStateChanged   } from "firebase/auth";
	export default{
		data(){
			return{
				avatar: userAvatar,
				isLogged: false
			}
		},
		beforeMount(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user){
                    this.isLogged = true
					this.avatar = user.photoURL
                } else {
                    this.isLogged = false
					this.avatar = userAvatar
                }
            });
        },
		methods: {

		}
	}
</script>

<style scoped>
	nav a#user img{
		padding: 10px;
		width: 57.5px;
	}
	nav a#user{
		border: 2.5px solid rgba(244, 5, 82,0);
		padding: 0;
		height: 65px;
		width: 65px;
		border-radius: 100%;
	}
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
	.active-user{
		border: 2.5px solid #f40552 !important;
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