<script setup>
import Nav from "./Nav.vue";
import Typewriter from 'vue-typewriter'

// import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  	<header>
		<h1>
			<a><VueWriter :array=word :typeSpeed="200" :eraseSpeed="200" :intervals="1000" :caret="underscore"/></a>
		</h1>
		<Nav />
	</header>
</template>


<script>
	export default{
		data(){
			return {
				word: ["Echo","echo"]
			}
		}
	}
</script>

<style scoped>
	.is-typed {
  font-family: "Monaco";
}

.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items:flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

	header{
		padding: 0 10vw;

		width: 100vw;
		height: 10vh;

		background-color: rgba(0, 0, 0, 0.15);

		display: flex;
    
		justify-content: space-between; 
		align-items: center; 
		flex-direction: row; 

	}
	h1{
		font-size: 64px;

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
</style>
