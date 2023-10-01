import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'
import './index.css'
import CKEditor from '@ckeditor/ckeditor5-vue';
import '../public/global.css';


let app;



auth.onAuthStateChanged(()=>{
    if(!app){
  
        app = createApp(App).use(router).use(CKEditor).mount('#app');
       
    }
})


