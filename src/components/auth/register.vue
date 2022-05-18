<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <h2>Enregistrement</h2>
    <form @submit.prevent="register">
        <input type="email" id="register-email" v-model="email" placeholder="Email">
        <input type="password" id="register-password" v-model="password" placeholder="Mot de passe">
        <button type="submit">Envoyer</button>
    </form>
    <h4 v-if="error!=''" v-text="error"></h4>
    <h3>Déjà un compte ? <RouterLink to="/auth/login">Connexion</RouterLink></h3>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    export default{
        data(){
            return {
                email:"",
                password:"",
                error: ""
            }
        },
        methods: {
            register(){
                console.log(this.email,this.password)
                const auth = getAuth();
                createUserWithEmailAndPassword(auth,this.email, this.password)
                    .then(() => {
                    this.$router.push("/")
                })
                .catch((error) => {
                    var err = error.message.replace("Firebase:","")
                    err = err.replace("Error", "Erreur")
                    this.error = err
                });
            },
        }
    }
</script>