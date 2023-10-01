import { doc, onSnapshot } from "firebase/firestore";
import {ref} from 'vue'
import {db} from '../firebase/config';

const getBlog = (blogId) => {
    
    let blogFetch = ref(null);
   

    const load = () => {
        let docRef = doc(db,"blogs",blogId);

        onSnapshot(docRef,(doc)=>{
            blogFetch.value = {...doc.data(),id:doc.id};
                
        })
        return blogFetch;
    }

    return {blogFetch,load}
}


export default getBlog;