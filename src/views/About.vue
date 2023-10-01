<template>
  <div class="aboutContainer" style="width:1000px;height:100vh">
   
        <h2 class="text-4xl bold mb-3">About Mila</h2>
        <small style="font-family: monospace" class="mb-5"><em><b>By MAUNG</b></em></small>
        <div class="about">
            <p style="font-size:20px">Sometimes simple works best. As a piece of work done through my VUE JS learning journey, I made this little bloggy website. Hope you guys enjoy this!! </p>
            <p style="font-size:19px" class="mb-5">THANKS A LOT...</p>
            <router-link to="/" style="font-style:italic;font-family:monospace;font-size:16px;text-decoration:underline">Go to Home</router-link>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .aboutContainer{
        margin:0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
</style>