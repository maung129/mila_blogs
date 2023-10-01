<template>
    <Navigation></Navigation>
    <div class=" detailContainer shadow-xl m-2 rounded p-3" >
        <h1 class="text-2xl font-extrabold mt-3">{{ blogFetch && blogFetch.title }}</h1>
        <div class="detailContent">
            <img :src="imageUrl" alt="">
            
                <div v-if="blogFetch && blogFetch.userId === user.uid">
                    <div class="buttons mb-10">
                     
                            <div class="mr-32">
                                <router-link :to="{name:'editBlog',params:{id:blogFetch && blogFetch.id}}"><button class="edit">Edit Blog</button></router-link>
                            </div>
                            <div>
                                <button @click="handleDelete(blogFetch.id)" class="delete">Delete Blog</button>
                            </div>
                      
                       
                
                </div>
            </div>
                <div class="text-base font-bold mb-5">Author : {{ blogFetch && blogFetch.author }}</div>
                <div class="text-xs font-semibold">Posted At : {{ blogFetch && format(blogFetch?.created_at?.toDate(),'MM / dd/ yyy') }}</div>
                
            <div class="blogDes mt-7 mb-20">
                <h2 class="mb-4 text-lg font-semibold">All about " {{ blogFetch && blogFetch.title }} "</h2>
                <div>
                    {{ blogFetch && blogFetch.body}}
                    <!-- .replace(/\s&nbsp;\s/ig, "") -->
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import getBlog from '@/composables/getBlog';
import { useRoute, useRouter } from 'vue-router';
import { storage,db, auth } from "@/firebase/config";
import { getDownloadURL, ref as stRef } from "firebase/storage";
import {ref} from 'vue'
import { format } from 'date-fns';

import {deleteDoc,doc} from 'firebase/firestore'
import getUser from '@/composables/getUser';


export default {
  components: {
    Footer, Navigation },
    setup(){
        let route = useRoute();
        let router = useRouter();
        let blogowner = ref(false);
        let user = getUser();
   

        let {blogFetch,load} = getBlog(route.params.id);
        
        load();
        let storageRef = stRef(storage,`images/${route.params.image}`);
        let imageUrl = ref(null);
            getDownloadURL(storageRef)
            .then((url)=>{
                console.log(url);
                imageUrl.value = url;
            }).catch((err)=>{
                console.log(err)
            })

        const handleDelete = async(blogId) => {
           let res = await deleteDoc(doc(db, "blogs", blogId));
            console.log(res);
            router.push('/');
        }



        return {blogFetch,imageUrl,format,handleDelete,blogowner,user}
    }
}
</script>

<style scoped>
template{
    background-color: rgb(206, 202, 185);
}
    .detailContainer{
        

        margin: 8px auto;
        text-align: center;
        max-width:900px
    }
    .detailContent{
        margin:0px 5px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);
    }
    img{
        margin:30px 0;
       width:50%;
        height: 350px;
        border-radius: 20px;
        object-fit: cover;

    }
    .sublabel{
        display: flex;
        
    }

    .buttons{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;

    }
    .edit{
        border:1px solid black;
        outline: none;
        background-color: transparent;
        color:black;
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
        background-color: black;
        color: white;

    }

    .delete:hover{
        border: none;
        background-color: red;
        color: white;
    }

</style>