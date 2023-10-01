<template>
    <div class="footer">
       
           <div>
            <h2 class="text-3xl mb-5">FireBlog</h2>
            <div class="flex justify-around items-center">
             <i class="fa-brands fa-twitter me-5 cursor-pointer" style="width:10px;color:white"></i>
             <i class="fa-brands fa-facebook me-5 cursor-pointer" style="width:10px;color:white"></i>
            <i class="fa-brands fa-youtube me-5 cursor-pointer" style="width:10px;color:white"></i>
            </div>
           </div>
          
           <div class="flex flex-col justify-center cursor-pointer" style="font-size:20px; padding: 20px">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/login">login / Register</router-link>
           </div>
           
           
    </div>

    <div class="bg-black">
        <p class="text-center text-sm text-gray-500">@copyright rights to FireBlog 2023</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        width:100vw;
        height:auto;
        padding:35px;
        display: flex;
        flex-direction: row;
        background: rgba(0, 0, 0, 0.9);
        color:white;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
    }

    @media (max-width: 768px) {
        .footer{
            flex-direction: column;
            justify-content: center;
            font-size: 16px;
        }
    }
</style>