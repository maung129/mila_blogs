<template>
    <Navigation></Navigation>
    
    <div class="createContainer">
        <h1 class="text-center text-3xl mt-10 mb-24">Create Your Own Fantastic Blog</h1>
        <form action="" @submit.prevent="create">
            <div class="mb-10">
                <label for="" class="mb-3">Enter your blog title</label>
                <input type="text" placeholder="Enter your title" v-model="title">
            </div>
             <div class="mb-10">
                <label for="" class="mb-3">Enter author name </label>
                <input type="text" placeholder="Enter author" v-model="author">
            </div>
            <div class="mb-10">
                <label for="" class="mb-3"> Select Your Blog Image </label>
                <input type="file" placeholder="Select your blog Image" @change="getImage">
            </div>
            <label for="">Write Your Blog Here : </label>
            <textarea id="" cols="30" rows="10" v-model="body"></textarea>
            <!-- <div id="editor" class="mb-7">
                
                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
         <QuillEditor theme="snow" v-model:content="editorData" /> -->
            <!-- </div>  -->
            <button class="mt-10 p-4" type="submit">Create Blog</button>
        </form>


    </div>
    <Footer></Footer>
</template>

<script>
import { auth, timestamp } from '@/firebase/config';
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from 'vue';
import createBlog from '@/composables/createBlog'
import uploadImage from '../composables/uploadImage'
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import getUser from '@/composables/getUser';



export default {
    
  components: {
    Footer, Navigation },
    setup(){
        const imageUpload = ref(null);
       
        const getImage = (e) => {
        imageUpload.value = e.target.files[0];
       }

        const router = useRouter();
 

        // const editor = ClassicEditor;
        // const editorConfig = (config) => {
        //     config.language = 'en'
        //     enterMode : CKEDITOR.ENTER_BR,
        //     config.fillEmptyBlocks = false;
        //     config.tabSpaces = 0;
        //     config.basicEntities = false;
           
        // };
        // const editorData = ref("");
        const title = ref("");
        const author = ref("");
        const created_at = timestamp();
        const body = ref("");
      
      
        
        // cleanText = (editorData.value).replace(/<\/?[^>]+(>|$)/g, "");

        // editorData.value = CKEDITOR.instances.ckdemo.document.getBody().getText();
       const create = async()=>{
       uploadImage(title.value,imageUpload.value);
   
        let docId = await createBlog({
            id:uuidv4(),
            title:title.value,
            author:author.value,
            body:body.value,
            image:imageUpload.value.name,
            created_at:created_at,
            userId:auth.currentUser.uid
            
        });

        // editorData.value.replace(/<\/?[^>]+(>|$)/g, ""),
        
        console.log(docId);
        router.push('/');
        
       }

       

       

        return {title,author,create,uploadImage,imageUpload,getImage,body}

        // editor,editorConfig,editorData



    }
    // data(){
    //     return {
    //             editor: ClassicEditor,
    //             editorData: "",
    //             editorConfig: {
    //                 // The configuration of the editor.
    //             }
    //         };
    // }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.createContainer{
    background-color: rgba(255, 252, 252, 0.8);
    box-shadow: 1px 4px 3px 1px rgba(57, 56, 56, 0.8);
    padding:20px;
    border-radius: 10px;
    width: 1000px;
    margin:50px auto;
    height: auto;
}
    #editor{
        width:70%;
        margin:0 auto;
        height: auto;
        
    }
    label{
        display: block;
        font-weight: bold;
    }
    input{
      padding: 10px;
        border:none;
        outline:none;
        border-radius: 10px;
        height: 40px;
        width:670px
        
     
    }
    input:focus{
        border: 1px solid black;
    }
    p{
        color:rgba(0, 0, 0, 0.8)
    }

    button{
       
        transition: 0.3s all ease-in-out;
        border:none;
        border-radius: 9px;
    }
    button:hover{
        background: black;
        color:white;
        transform: scale(1.02);
    }


textarea{
   
    width:90%
}
</style>