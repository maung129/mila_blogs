import { db } from "@/firebase/config";
import { doc, onSnapshot,collection } from "firebase/firestore";
import { ref } from "vue"


const getBlogs = () => {
    let blogs = ref([]);
    let error = ref(null);

    const load = () => {
        let collectionRef =  collection(db,"blogs"); 

         onSnapshot(collectionRef,(snap)=>{
            let results = [];
            snap.docs.forEach((doc)=>{
               
               results.push({...doc.data(),id:doc.id})
            })
            blogs.value = results;
            
        })
        return blogs;
       }
       
    

    return {blogs,error,load}
}


export default getBlogs;

