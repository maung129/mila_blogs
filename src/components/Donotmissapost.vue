<template>
    <div class="section-container bg-slate-200 shadow rounded-sm p-7 flex flex-col md:flex-row justify-center md:justify-between md:items-center">
          <h2 class="text-3xl font-bold text-center " style="width:75%">
              NEVER MISS A POST. REGISTER FOR YOUR FREE ACCOUNT TODAY!
          </h2>
         <router-link to="/register">
            <button class="p-4">Register your account today <i class="fa-solid fa-arrow-right fa-bounce ms-2" style="color:white"></i></button>
         </router-link>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .section-container{
      width:100vw;
      height: 300px;
  }
      button{
      
          background: transparent;
          border: 2px solid black;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
  
      }
      button:hover{
          background: black;
          color:white;
          transform: scale(1.01);
      }
  </style>