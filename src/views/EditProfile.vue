<template>
    <div class="createContainer">
        <h1 class="text-center text-3xl mt-10 mb-24">Update Your Profile</h1>
        <form action="" @submit.prevent="editProfile">
            <div class="mb-10">
                <label for="" class="mb-3">Update your displayname</label>
                <input type="text" id="displayname" placeholder="Update your displayname" v-model="upName">
            </div>
             <div class="mb-10">
                <label for="" class="mb-3">Update your email</label>
                <input type="email" id="email" placeholder="Update your email" v-model="upEmail">
            </div>
            <div class="mb-10">
                <label for="" class="mb-3"> Update Your Profile Photo </label>
                <input type="file" placeholder="Update your Profile Photo" @change="getImage">
            </div>
            
            <button class="mt-10 p-4" type="submit">Update Profile</button>
        </form>


    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, storage } from '@/firebase/config';
import { ref as stRef, uploadBytesResumable } from 'firebase/storage';
import getUser from '@/composables/getUser';


export default {
    setup(){
        const user = getUser();
        const router = useRouter();
        const upName = ref(user.value.displayName);
        const upEmail = ref(user.value.email);
        const upPhoto = ref(user.value.photoURL);

        const getImage = (e) => {
        upPhoto.value = e.target.files[0];
       }
      

       const editProfile = () => {
            if(upPhoto){
            const storageRef = stRef(storage, `users/${upPhoto.value.name}`);
            const uploadTask = uploadBytesResumable(storageRef, upPhoto.value);
        }
        
        
       onAuthStateChanged(auth,(_user)=>{
        _user.displayName = upName.value;
        _user.email = upEmail.value,
        _user.photoURL = upPhoto.value.name
       });

       router.push('/profile'); 

       }
      


    

      

       
        
        

        return {upName,upEmail,getImage,editProfile}
    }
}

</script>

<style>

</style>