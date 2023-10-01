<template>
    <div class="createContainer">
        <h1 class="text-center text-3xl mt-10 mb-24">Update Your Blog</h1>
        <form @submit.prevent="edit">
            <div class="mb-10">
                <label for="" class="mb-3">Update your blog title</label>
                <input type="text" id="title" placeholder="Update your title" v-model="upTitle">
            </div>
             <div class="mb-10">
                <label for="" class="mb-3">Update author name </label>
                <input type="text" id="author" placeholder="Update author" v-model="upAuthor">
            </div>
            <div class="mb-10">
                <label for="" class="mb-3"> Update Your Blog Image </label>
                <input type="file" placeholder="Update your blog Image" @change="getImage">
            </div>
            <div class="mb-10">
                <label for="" class="mb-3"> Update Your Blog </label>
                <textarea id="" cols="70" rows="10" v-model="updateBody" ></textarea>
            </div>
            <button class="mt-10 p-4" type="submit">Update Blog</button>
        </form>


    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRoute,useRouter } from 'vue-router';
import {computed, onMounted, ref} from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import { doc, getDoc,updateDoc } from 'firebase/firestore';
import {db} from '../firebase/config';
import { timestamp } from '../firebase/config';
import uploadImage from '@/composables/uploadImage';

export default {
    setup(){
        const route = useRoute();
        const router = useRouter();
    

        // const {blogFetch,load} = getBlog(route.params.id);
        // load();

        let upTitle = ref("");
        let upAuthor = ref("");
        let updateBody = ref("");

        getDoc(doc(db,"blogs",route.params.id)).then((doc)=>{
            let {title,author,body,created_at,image} = doc.data();
            upTitle.value = title;
            upAuthor.value = author;
            updateBody.value = body;

           console.log(upTitle.value);
        })
   
    
        const created_at = timestamp();
        const imageUpload = ref(null);
        const getImage = (e) => {
            imageUpload.value = e.target.files[0];
      
       }

        const edit = async() => {
            uploadImage(upTitle.value,imageUpload.value);
            await updateDoc(doc(db, "blogs", route.params.id),{
                title:upTitle.value,
                author:upAuthor.value,
                body:updateBody.value,
                image: imageUpload.value.name,
                created_at
            })
            router.push('/');
        }

        return {getImage,upTitle,upAuthor,updateBody,edit}
    }
}

</script>

<style>

</style>