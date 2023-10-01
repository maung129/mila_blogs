<template>
    <div class="loginContainer">
        <div class="p-15 md:mt-28">
            <h1 class="text-3xl text-center font-bold">Login your Account Now !</h1>
            <form @submit.prevent="login" action="" class="loginForm">
                <div class="mb-4">
                    <label for="">Enter your email</label>
                    <input type="email" placeholder="Enter your email" v-model="email">
                </div>
                <div class="mb-4">
                    <label for="">Enter your password</label>
                    <input type="password" placeholder="Enter your password" v-model="password">
                </div>
                <button type="submit" class="p-3 rounded bg-white text-black hover:bg-black hover:text-white">Login</button>
                <small>Don't have an account yet ? <router-link :to="{name:'register'}" class=" underline cursor-pointer">Register your account</router-link> </small>
            </form>
        </div>
        <div>
            <img src="../assets/login.jpg" alt="">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { useRouter } from 'vue-router';
import {signInWithEmailAndPassword} from 'firebase/auth'


export default {
    setup(){
        const router = useRouter();
        let email = ref("");
        let password = ref("");
        const error = ref(null);
       
        let login = async() => {
            try{
                let res = await signInWithEmailAndPassword(auth,email.value,password.value);
                console.log(res.user);
                router.push('/');
            }
            catch(err){
                error.value = err.message;
            }
            
        
        }

        return {email,password,login}
    }
}
</script>

<style scoped>
    .loginContainer{
        display: grid;
        grid-template-columns: 2fr 3fr;
       font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    img{
        width:100%;
        height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
        object-fit: cover;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .loginForm{
        margin: 30px;
        padding: 30px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    label{
        display: block;
        font-weight: bold;
    }
    input{
        padding:12px;
        border:none;
        outline:none;
        border-radius: 10px;
        width:500px;
        margin-top: 20px;
    }
    input:focus{
        border: 1px solid black;
    }
    p{
        color:rgba(0, 0, 0, 0.8)
    }
    small{
        margin-left:55px;
        margin-top: 30px;
        display: inline-block;
    }
    small a{
        font-weight: bold;
    }
    button{
        transition: 0.3s all ease-in-out;
        margin:10px;

    }

    button:hover{
        transform: scale(1.02);
    }
</style>