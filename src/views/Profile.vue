<template>
    <h1 class="text-center text-3xl mt-7">Your Profile</h1>
    <div class="profileContainer">
        <div class="imageContainer">
            <img :src="imageUrl" alt="Upload your profile photo" class="profilePhoto">
        </div>
        <div class="mb-3 flex flex-col items-center justify-center" >
            <label for="" class="mb-3"> <span class="me-2"><i class="fa fa-user"></i></span> Your Displayname   </label> <span class="ms-4 font-extrabold text-xl">{{ user.displayName }}</span>
        </div>
        <div class="mb-3 flex flex-col items-center justify-center" >
            <label for="" class="mb-3"><span class="me-2"><i class="fa-regular fa-envelope"></i> Your Email</span> </label> <span class="ms-4 font-extrabold text-xl">{{ user.email }}</span>
        </div>
        <div class="mb-3 mt-5 flex items-center justify-around" >
            <router-link to="/profile/edit">
                <button class="edit">Edit profile</button>
            </router-link>
            <button class="delete" type="submit" @click="deleteAccount">Delete Your Account</button>
        </div>
       

    </div>
</template>

<script>
import { ref as stRef, getDownloadURL } from 'firebase/storage';
import getUser from '@/composables/getUser'
import { auth, storage } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { deleteUser } from 'firebase/auth';

export default {
    setup(){
        let router = useRouter();
        let user = getUser();
        console.log(user);

        let storageRef = stRef(storage,`users/${user.value.photoURL}`);
        let imageUrl = ref(null);
            getDownloadURL(storageRef)
            .then((url)=>{
                console.log(url);
                imageUrl.value = url;
            }).catch((err)=>{
                console.log(err)
            })


        //delete user account 
        const deleteAccount = async() => {
            const dUser = user.value
            if(dUser){
                await dUser.delete();
                router.push('/');
            }
            else{
                router.push('/login');
            }
        }


        return {user,imageUrl,deleteAccount}
    }
}
</script>

<style scoped>
    .profileContainer{
        max-width: 700px;
        box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.2);
        text-align: center;
        margin: 30px auto;
        border-radius: 20px;
        padding:30px
    }
    .profilePhoto{
        width:300px;
        height:300px;
        border: 1px solid white;
        border-radius: 10px;
        object-fit:cover
    }
    .imageContainer{
        display: flex;
        align-items: center ;
        justify-content: center;
        margin-bottom: 30px;
    }
    .edit{
        border:1px solid darkblue;
        outline: none;
        background-color: transparent;
        color:darkblue;
        transition: all 0.2s ease;
        padding: 10px;
    }

    .delete{
        border:1px solid red;
        outline: none;
        background-color: transparent;
        color:red;
        transition: all 0.2s ease;
        padding: 10px;
    }

    .edit:hover{
        border: none;
        background-color: darkblue;
        color: white;

    }

    .delete:hover{
        border: none;
        background-color: red;
        color: white;
    }
</style>