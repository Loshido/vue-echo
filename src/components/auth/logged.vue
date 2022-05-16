<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <h2 id="already-logged">Vous êtes déjà connecté(e) ⚠️</h2>
    <h3><a @click="logout()">Se déconnecter</a></h3>
    <hr>
    <form @submit.prevent="sendAvatar">
        <h3>Déposer une photo de profil</h3>
        <input type="url" id="avatar" v-model="photo" placeholder="Avatar">
        <button type="submit">Envoyer</button>
    </form>
</template>
<style scoped>
    hr{
        margin: 5vh 15% 0 15% ;
        width: 70%;
    }
    h2#already-logged{
        font-size: 1.7rem;
    }
    input[type="url"]{
        width: 340px !important;
    }
</style>

<script>
import { getAuth, signOut, updateProfile } from "firebase/auth";
    export default{
        data(){
            return{
                photo: null
            }
        },
        methods: {
            sendAvatar(){
                const auth = getAuth();
                if(auth){
                    updateProfile(auth.currentUser, {
                        photoURL: this.photo
                    })
                    .then()
                    .catch((error) => {
                        console.log(error)
                    });
                }
            },
            logout(){
                const auth = getAuth();
                signOut(auth)
                this.$router.push("/")
            }
        }
    }
</script>