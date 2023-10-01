<template>
    <div class="flex flex-col justify-center items-center p-5">
        <div class="blogImgContainer">
            <img :src="imageUrl" alt="" class="blogImage">
        </div>
        <div class="blogDetailContainer">
            <h3 >{{ blog.title }}</h3>
        <div class="flex flex-col justify-between items-center gap-2">
            <small class=" font-bold">{{ blog.author }}</small>
            <p>Posted At: {{ blog.created_at && format(blog.created_at.toDate(),'MM / dd/ yyy') }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import {format} from 'date-fns'
import { storage } from "@/firebase/config";
import { getDownloadURL, ref as stRef } from "firebase/storage";
import {ref} from 'vue'

export default {
    props:['blog'],
    setup(props){
        let storageRef = stRef(storage,`images/${props.blog.image}`);
        let imageUrl = ref(null);
            getDownloadURL(storageRef)
            .then((url)=>{
                console.log(url);
                imageUrl.value = url;
            }).catch((err)=>{
                console.log(err)
            })



        return {format,imageUrl}

    }

}
</script>

<style>
    .blogImage{

       width:100%;
       object-fit:cover;
       height:200px;
        
    }
    .blogDetailContainer{
        margin-top:10px;
        flex:1;
    }
   
</style>