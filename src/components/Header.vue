<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  <header>
		<h1>
			<a>Echo</a>
		</h1>
		<Nav />
	</header>
</template>

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
    top: 0;
    z-index: 3;
    position: absolute;
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
