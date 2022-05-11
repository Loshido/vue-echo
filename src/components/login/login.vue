<template>
    <form class="login">
        <h1>Login</h1>
        <div class="container">
            <label for="em">email</label>
            <input id="em" type="email">
            <input id="pw" type="password">
            <input id="bt" type="button">
            <input id="sb" type="submit">
        </div>
        
    </form>
</template>

<style scoped>
    input#em{
        padding: 8px 16px;
        border: 0;
        border-radius: 3px;
    }
    form.login h1{
        padding: 25px;
    }
    div.container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form.login{
        height: 60vh;
        width: 50vw;
        margin: 5vh 25vw;
        margin-top: 15vh;

        border-radius: 25px;
        background-color: rgba(81, 141, 160, 0.308);
    }
</style>