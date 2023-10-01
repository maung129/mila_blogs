import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import SingleBlog from '@/views/SingleBlog'
import Blogs from '@/views/Blogs'
import CreateBlog from '@/views/CreateBlog'
import { auth } from '@/firebase/config'
import BlogDetail from '@/views/BlogDetail'
import EditBlog from '@/views/EditBlog'
import Profile from '@/views/Profile'
import EditProfile from '@/views/EditProfile'
import About from '@/views/About'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path:'/login',
    name:"login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(!user){
        next()
      }
     else{
      next({name:"home"});
     }
     
    }
  },
  {
    path:'/register',
    name:"register",
    component:Register,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(!user){
        next()
      }
     else{
      next({name:"home"});
     }
    }
  },
  {
    path:'/blogs/blog/:id',
    name:'blog',
    component:SingleBlog,

    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  },
  {
    path:'/blogs',
    name:'blogs',
    component:Blogs,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  },
  {
    path:'/blogs/blogDetail/:image/:id',
    name:'blogDetail',
    component:BlogDetail,
    beforeEnter:(to,from,next)=>{
      const user = auth.currentUser;
      if(user){
        next();
      }
      else{
        next({name:"login"})
      }
    }
  },
  {
    path:'/create',
    name:'create',
    component:CreateBlog,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  },
  {
    path:'/blogs/blog/:id/edit',
    name:'editBlog',
    component:EditBlog,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  },
  {
    path:"/profile/edit",
    name:'editProfile',
    component: EditProfile,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if(user){
        next()
      }
     else{
      next({name:"login"});
     }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
