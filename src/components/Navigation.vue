<template>
    <div class="w-full">
      <nav class="flex items-center md:p-12 relative justify-between" style="height:50px;width: 100%;">
        <h2 class="text-3xl font-bold p-3">MILA BLOGS</h2>
        <div class="nav-items flex relative">
            <ul class="flex flex-col p-7 md:flex-row items-center justify-center w-full">
             
              <li class="nav-item md:mr-8  text-xl cursor-pointer"><router-link :to="{name:'home'}">Home</router-link></li>
              <li class="nav-item md:mr-8 text-xl cursor-pointer"><router-link :to="{name:'create'}">Create Blog</router-link></li>
              <div v-if="!isLogin">
                <li class="nav-item md:mr-8 text-xl cursor-pointer"><router-link :to="{name:'login'}">Login</router-link></li>
              <li class="nav-item md:mr-8 text-xl cursor-pointer"><router-link :to="{name:'register'}">Register</router-link></li>
              </div>
              <div v-if="isLogin">
                <li class="nav-item md:mr-8 text-xl cursor-pointer" @click="logout">Logout</li>
              </div>
              <li class="nav-item md:mr-8 text-xl cursor-pointer"><router-link :to="{name:'about'}">About</router-link></li>
              <li class="cursor-pointer">
                <div v-if="mobile">
                  <li class="nav-item md:mr-8 text-xl cursor-pointer">Profile</li>
                </div>
                <div v-if="!mobile">
                 <router-link to="/profile">
                    <span class="text-center bg-white inline-block text-black" style="width:70px; height:65px;border:2px solid white; border-radius:50%; font-weight:bold; position:relative">
                      <span style="margin-top:15px;display:inline-block; position:absolute; left:0; right:0" class=" text-lg">
                      {{ user ? user.displayName && user.displayName.match(/(\b\S)?/g).join("") : 'Guest' }}
                      </span>

                    </span>
                    
                 </router-link>
                </div>

              </li>
              
            </ul>
            <li class="flex md:hidden"><i class="fa-solid fa-bars text-lg p-4" style="color: white;"></i></li>
           <!-- <div>
            
            <ul class="flex md:hidden flex-col bg-black absolute top-14 right-0 w-52 border rounded">
              <li class="mobile-nav-item p-2 text-center"><i class="fa-solid fa-house mr-4 mb-3" style="color: #ffffff;"></i>Home</li>
              <li class="mobile-nav-item p-2 text-center"><i class="fa-solid fa-plus mr-4 mb-3" style="color: #ffffff;"></i>Create Blog</li>
              <li class="mobile-nav-item p-2 text-center"><i class="fa-solid fa-arrow-right-to-bracket mr-4 mb-3" style="color: #ffffff;"></i>Login/Register</li>
              <li class="mobile-nav-item p-2 text-center"><i class="fa-solid fa-ellipsis-vertical mr-4 mb-3" style="color: #ffffff;"></i>About</li>
              <li class="mobile-nav-item p-2 text-center"><i class="fa-solid fa-user mr-4 mb-3" style="color: #ffffff;"></i>Your Profile</li>
            </ul>
           </div> -->
        </div>
      </nav>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import {useRouter} from 'vue-router';
import getUser from '../composables/getUser'


export default {

 setup(){
  let mobile = ref(false);
  let windowWidth = ref(null);
  let isLogin = ref(false);
  const router = useRouter();
  let user = getUser();

  

  let checkScreen = () => {
    windowWidth = window.innerWidth;
    if(windowWidth<=768){
      mobile.value = true;
    }
    else{
      mobile.value = false;
    }
  }

  onMounted(()=>{

    if(auth.currentUser){
      isLogin.value = true;
    }
    else{
      isLogin.value = false;
    }
    window.addEventListener('resize',checkScreen);
    return(()=>{
      checkScreen();
    });

   
   
  })

  const logout = async() => {
   try{
    await signOut(auth);
    console.log('user logged out');
    window.location.reload();
   }
   catch(err){
    console.log(err.message)
   }
    
  }



  return {mobile,isLogin,logout,user}

  
 }
}
</script>

<style scoped>
nav{
  background-color: rgba(255, 249, 249, 0.8);
  color:black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  @media (max-width:768px) {
    ul{
      position:absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.8);
      width:100vw;
      height: auto;
      top:65px;
      right:0
    }
    li{
      padding:5px;
      margin-bottom: 7px;
    }
  }
</style>