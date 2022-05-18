<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <h2>Connexion</h2>
    <form @submit.prevent="login">
        <input type="email" id="login-email" v-model="email" placeholder="Email">
        <input type="password" id="login-password" v-model="password" placeholder="Mot de passe">
        <button type="submit">Envoyer</button>
    </form>
    <h4 v-if="error!=''" v-text="error"></h4>
    <h3>Besoin d'un compte ? <RouterLink to="/auth/register">S'enregistrer</RouterLink></h3>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    export default{
        data(){
            return {
                email:"",
                password:"",
                error: ""
            }
        },
        methods: {
            login(){
                console.log(this.email,this.password)
                const auth = getAuth();
                signInWithEmailAndPassword(auth,this.email, this.password)
                    .then(() => {
                    this.$router.push("/")
                })
                .catch((error) => {
                    var err = error.message.replace("Firebase:","")
                    err = err.replace("Error", "Erreur")
                    this.error = err
                });
            }
        }
    }
</script>