import { storage } from "@/firebase/config";
import { getDownloadURL, ref as stRef } from "firebase/storage";
import {ref} from 'vue'


const getImage = (fileName) => {
    let storageRef = stRef(storage,`images/${fileName}`);
    let imageUrl = ref("");
    getDownloadURL(storageRef)
    .then((url)=>{
        console.log(url);
        imageUrl = url;
    }).catch((err)=>{
        console.log(err)
    })

    return imageUrl;
}


export default getImage;