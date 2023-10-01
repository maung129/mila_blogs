<template>
    <div class="wrapper">
        <div class="section-container ">
            <div class="blog-content text-white flex flex-col justify-center items-center p-5">
                 <h2 class="text-3xl mb-3">
                    Welcome from FIREBLOG
                 </h2>
                 <p class=" text-gray-300 leading-2 text-center mb-3">
                    Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!
                 </p>
                 <router-link to="/login" class="font-bold text-lg">Login Now <i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:white"></i></router-link>
              </div>
              <div class="blog-image">
                    <img src="../assets/blogPhotos/coding.jpg" alt="">
              </div>
          </div>
          <div class="section-container reverse ">
              <div class="blog-content text-white white flex flex-col justify-center items-center p-5">
                <h2 class="text-3xl mb-3">
                    Write your first blog post now!
                </h2>   
                <p class=" text-black leading-2 text-center mb-3">
                    Be the first to know about latest updates, volunteer opportunities, events, and more. Stories and updates from the Unspoken Smiles team, partners, and supporters.
                 </p>
                 <router-link to="/blogs" class="font-bold text-lg">View Blogs <i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:black"></i></router-link>
                </div>
                <div class="blog-image">
                   <img src="../assets/blogPhotos/beautiful-stories.jpg" alt="">
                </div>
            </div>
            <div class="section-container ">
              <div class="blog-content text-white flex flex-col justify-center items-center p-5">
                <h2 class="text-3xl mb-3">
                    Investigate yourself with <i>FIREBLOG</i>
                </h2>
                 
                   <p class=" text-gray-300 leading-2 text-center mb-3">
                    There are lots of blogs about inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration? Browse our search results.
                 </p>
                 <router-link to="/about" class="font-bold text-lg">Want to know more about us? <i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:white"></i></router-link>
                </div>
                <div class="blog-image">
                    <img src="../assets/blogPhotos/designed-for-everyone.jpg" alt="">
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-container{
    width:100%;
    height: calc(100vh - 98px);
    display:flex;
    flex-direction: column;

}


.blog-content{
    display: flex;
    flex:4;
    order:2;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    color:rgb(255, 252, 252);
    order:1
}

.blog-image{
    display: flex;
    flex:4;
    order:1;
    flex-direction: column;
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.blog-image img{
    width:100%;
    height:100%
}

.reverse .blog-content{
    order:2
}
.reverse .blog-image{
    order:1
}

.white{
    background: white;
    color:black;
}







@media (min-width: 768px) {
    .section-container{
        display: flex;
        flex-direction: row;

    }
   
}

@media (max-width: 768px) {
    .section-container{
        display: flex;
        flex-direction: column;

    }

    .blog-content{
        order:1;
        flex:1
    }
    .blog-image{
        order:1;
        flex:1
    }
}





    
</style>

