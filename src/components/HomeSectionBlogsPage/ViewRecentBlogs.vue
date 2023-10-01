
<template>
    <div class="container bg-white w-full p-10 " style="height:auto">
        <div class="header-container">
          <h2 class="text-3xl font-bold font-mono mb-8">View More Recent Blogs</h2>
          <div>
            <router-link :to="{name:'blogs'}">
              <h3>Go to blogs page to view more <i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:black"></i></h3>
            </router-link>
          </div>
        </div>
       <div class="flex gap-16 container blogs" >
        <div v-for="blog in blogs" :key="blog">
          <div class="blog-container text-center" >
              <RecentBlog :blog="blog"></RecentBlog>
           </div>
        </div>
       </div>
    </div>
</template>

<script>
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { onMounted, ref } from 'vue'
import RecentBlog from './RecentBlog'
import getBlogs from '@/composables/getBlogs'



export default {
  components:{
    RecentBlog
  },

  setup(){

   let {blogs,error,load} = getBlogs();
   load();

   return {blogs,error}



//     let formattedBlogs = computed(()=>{
//         return blogs.value.map((blog)=>{
//           if(blog.created_at){
//             let formattedTime = formatDistanceToNow(blog.created_at.toDate());
//             return {...blog,created_at: formattedTime};
//           }
//         })
//       })


  

//     return{blogs,error,formattedBlogs}
//   }





}

}

</script>




<style scoped>

.blogs{
  max-width: 100%;


}

.blog-container{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width:300px;
  height:auto;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 3px 7px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition:all 0.2s ease-in-out;
  cursor: auto;
  
}
.blog-container img{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width:100%;
  object-fit: contain;
}

.blog-container:hover{
  transform: scale(1.01);
 
}

@media (max-width:768px) {
  .blog-container{
      flex-direction:column;

  }
}

.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.header-container h3{
  font-weight: 700;
  font-size: 20px;
}
</style>