<template>
    <div class="registerContainer">
        <div class="p-15 md:mt-28">
            <h1 class="text-3xl text-center font-bold">Register your Account !</h1>
            <form @submit.prevent="signUp" action="" class="registerForm">
                <div class="mb-4">
                    <label for="">Enter your username</label>
                    <input type="text" placeholder="Enter your username" v-model="username">
                </div>
                <div class="mb-4">
                    <label for="">Enter your email</label>
                    <input type="email" placeholder="Enter your email" v-model="email">
                </div>
                <div class="mb-4">
                    <label for="">Enter your password</label>
                    <input type="password" placeholder="Enter your password" v-model="password">
                </div>
                <div class="mb-4">
                    <label for="">Choose your profile picture: </label>
                    <input type="file" placeholder="Choose your profile" @change="getImage">
                </div>
                <button class="p-3 rounded bg-white text-black hover:bg-black hover:text-white">Sign up</button>
                <small>Already have an account ? <router-link :to="{name:'login'}" class=" underline cursor-pointer">Login your account</router-link> </small>
            </form>
        </div>
        <div>
            <img src="../assets/login.jpg" alt="">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { collection } from 'firebase/firestore';
import { auth, db } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { storage, timestamp } from "@/firebase/config";
import { getDownloadURL, ref as stRef, uploadBytesResumable } from "firebase/storage";

export default {
    setup(){
        const username = ref("");
        const email = ref("");
        const password = ref("");
        const photo = ref(null);
        const error = ref(null);

        const getImage = (e) => {
        photo.value = e.target.files[0];
       }
        
        const router = useRouter();

        const signUp = async() => {
           try{

            let res =await createUserWithEmailAndPassword(auth,email.value,password.value);
            await updateProfile(res.user, {
                        displayName: username.value, photoURL: photo.value.name
                })
                const storageRef = stRef(storage, `users/${photo.value.name}`);
                const uploadTask = uploadBytesResumable(storageRef, photo.value);


                uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        let collectionRef = collection(db,"images");
                    console.log(downloadURL);
                    
                    // addDoc(collectionRef,{
                    //     title:title,
                    //     url:downloadURL,
                    //     created_at:timestamp()
                    // }).then((res)=>{
                    //     console.log(res)
                    // }).catch((err)=>console.log(err));
                    
                    

                    }).catch((err)=>console.log(err))
                    
                    ;
                }
                );
            router.push('/');
           }
           catch(err){
            error.value = err.message
            console.log(err);
           }
        }



        return {username,email,password,signUp,getImage}
    }
}
</script>

<style scoped>
    .registerContainer{
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
    .registerForm{
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
        margin-left:70px;
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