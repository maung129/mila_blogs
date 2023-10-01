import { storage } from "@/firebase/config";
import { ref as stRef, getDownloadURL } from "firebase/storage";




const getImageUrl = (imageName) => {
    
    let storageRef = stRef(storage,`images/${imageName}`);
    try{
        getDownloadURL(storageRef)
    .then((url) => {
        console.log(url);
        return url;
    })
    .catch((error) => {
    // Handle any errors
        console.log(error);
    });
    }
    catch(err){
        console.log(error);
    }
}


export default getImageUrl;