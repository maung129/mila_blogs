import { db } from "@/firebase/config"
import { addDoc, collection } from "firebase/firestore"


const createBlog = async(blog) => {
    try{
        let collectionRef = collection(db,"blogs");

        let res = await addDoc(collectionRef,blog);
        console.log(res);
        return res.id;
    }
    catch(err){
        console.log(err);
    }
}

export default createBlog;