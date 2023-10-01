import { db, storage, timestamp } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref as stRef, uploadBytesResumable } from "firebase/storage";
import {ref} from 'vue';


const uploadImage = (title,file) => {
    
    const storageRef = stRef(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);



    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            let collectionRef = collection(db,"images");
          console.log(downloadURL);
         
           addDoc(collectionRef,{
            title:title,
            url:downloadURL,
            created_at:timestamp()
          }).then((res)=>{
            console.log(res)
          }).catch((err)=>console.log(err));
          
           

        }).catch((err)=>console.log(err))
        
        ;
      }
    );


}



export default uploadImage;