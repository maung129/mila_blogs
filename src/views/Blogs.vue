<template>
    <section class="container">
        <h2>Welcome From Mila Blogs</h2>
        <section class="blogsContainer">
                   <div class="blogCard" v-for="blog in blogs" :key="blog.id">
                        <router-link :to="{name:'blogDetail',params:{id:blog.id,image:blog.image}}">
                            <BlogCard :blog="blog"></BlogCard>
                        </router-link>
                    </div>
        </section>
    </section>
</template>

<script>
import BlogCard from './BlogCard'
import BlogDetail from './BlogDetail'
import getBlogs from '@/composables/getBlogs'

export default {
  components: {
    BlogCard, BlogDetail },
    setup(){
        let {blogs,error,load} = getBlogs();
        load();

        return {blogs}
    }

}
</script>

<style>
    .container{
        margin:20px;
        padding:10px;
    }

    .container h2{
        text-align: center;
        font-weight: 700;
        font-size:30px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .container h3{
        font-size: 21px;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;
    }

    .blogsContainer{
        margin-top:30px;
        min-width:1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

    }

    .blogCard{
        margin:10px 20px;
        width:300px;
        height: 360px;
        border: none;
        box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
        cursor:pointer;
        transition:all 0.3s ease-in-out;
        border-radius: 10px;
        cursor: pointer;
    }

    .blogCard:hover{
        transform:scale(1.03);

    }
</style>