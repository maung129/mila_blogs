<template>
   
    <div class="blog-card" >
       <router-link :to="{name:'blog',params:{id:blog.id}}" class=" text-center"> 

        <SingleBlog :blog="blog" :image="blog.image" :title="blog.title" :author="blog.author" :createdAt="blog.created_at"></SingleBlog>

        <!-- <img src="../assets/blogCards/stock-1.jpg" alt="image" class="mb-5">
       
        <h2 class="font-bold text-lg uppercase mb-3">{{ blog.title }}</h2>
        <p class=" text-gray-700 text-sm mb-10">Posted at : {{ blog.created_at }}</p>
        
       <div class="mb-5">
        <router-link to="/blogs">View More ...<i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:white"></i></router-link>
        </div> -->
        </router-link>
      
    </div>

</template>

<script>
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import {ref} from 'vue';
import SingleBlog from '../../views/SingleBlog';


export default {
    components:{Footer,Navigation,SingleBlog},
    props:['blog'],
    setup(props){
        let blog = props.blog;
       
        return {blog}
    }
    // setup(props){
    //     let blog = props.blog;
    //     // let url = ref(null);
 
    //     // let collectionRef = collection(db,"images");
    //     // getDocs(collectionRef).then((response)=>{
    //     //     console.log(response.docs);
    //     //     let image = response.docs.find((doc)=>{
    //     //        return doc.data().title === props.blog.title;
    //     //     })
    //     //     console.log(image.data().url);
    //     //     url.value = image.data().url;
    //     //     return url;
    //     // })
        

    //     // console.log(url.value);


    //     return {blog}

    //     // let blogImage = props.blog.image;
    
    //     // console.log(blogImage);

    //     // blogImages.value = getImages(blogImages.value);
    //     // let blogImage = blogImages.value.find(image=>{
    //     //    return image === props.blog.image
    //     // })



    //         // const storageRefDownload = stRef(storage,"images/"+ props.blog.image);
            
    //         // const getImage = (ref) => {
    //         //     getMetadata(ref).then(function(url){
    //         //     console.log(url);
    //         //     return url;

    //         // })

    //         // }

    //         // onMounted(()=>{
    //         //     getImage(storageRefDownload);
    //         // })

    //         // console.log(imageName.value);

    //     // console.log(props.blog.image);
    //     // console.log(getImage(props.blog.image));
      
    //     // console.log(props.blog.image);



       

    // }
}
</script>

<style>

   
   
</style>