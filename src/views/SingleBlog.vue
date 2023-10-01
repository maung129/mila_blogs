<template>

   <router-link to="/blogs">
    <div class="blog-container">
        <img :src="imageUrl" alt="image" class="mb-5">
        <h2 class="text-3xl">{{ blogFetch && blogFetch.title }}</h2>
        <h6 class="text-sm">by - {{ blogFetch && blogFetch.author }}</h6>
        <p class=" text-gray-600 mt-3">Posted at : {{ blogFetch.created_at && format(blogFetch.created_at.toDate(),'MM / dd/ yyy') }}
        </p>

    </div>
   </router-link>

</template>

<script>
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer'
import getBlog from '@/composables/getBlog';
import getImage from '@/composables/getImage'
import { useRoute } from 'vue-router';
import { storage } from "@/firebase/config";
import { getDownloadURL, ref as stRef } from "firebase/storage";
import {ref} from 'vue'
import { format } from 'date-fns';

export default {
    components: { Footer, Navigation },
    props:['blog','image','title','author','createdAt'],
    setup(props){
        let blogFetch = props.blog;
        let title = props.title;
        let author = props.author;
        let createdAt = props.createdAt;
        let storageRef = stRef(storage,`images/${props.image}`);
        let imageUrl = ref(null);
            getDownloadURL(storageRef)
            .then((url)=>{
                console.log(url);
                imageUrl.value = url;
            }).catch((err)=>{
                console.log(err)
            })

     
        console.log(imageUrl);

      
        return {blogFetch,imageUrl,title,author,createdAt,format}
        // let url = getImage(props.blog.image);


        // console.log(url);
        
        // getDoc(doc(db,"blogs",props.id))
        // .then((res)=>{
        //     console.log(res.data().title);
        //     getDoc(doc(db,"images",res.data().title))
        //     .then((res)=>{
        //         console.log(res.data().url);
        //     })
        // })
        
        // let docRef = doc(db,"images",)
        // getDoc()

        // let storageRef = stRef(storage,`images/${blog.image}`);

        // getDownloadURL(storageRef)
        // .then((url)=>{
        //     console.log(url);
        //     return url;
        // }).catch((err)=>{
        //     console.log(err)
        // })


        // onMounted(async()=>{
        //     const docRef = doc(db, "blogs", props.id);
        //     const docSnap = await getDoc(docRef);

     
        //     console.log("Document data:", docSnap.data().image);
        //     console.log(getImage(docSnap.data().image));
            
   
        // })

       
        // let docRef = doc(db,"blogs",props.id);

        // onSnapshot(docRef,(doc)=>{
        //     let blogGet = {...doc.data(),id:doc.id};
                
        // blog.value = blogGet;
        //     return blogGet;
        // })

        
      

  
    }
    
}
</script>

<style scoped>
.blog-container{

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    flex: 1;
    cursor: auto;
    flex-wrap: wrap;
    width:300px;
    height:370px;
}
.blog-container img{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width:100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width:768px) {
    .blog-container{
        flex-direction:column;
  
    }
  }
</style>