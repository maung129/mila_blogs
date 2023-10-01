import { initializeApp } from "firebase/app";
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBgYJnLdyrSpMgynksikPTrvZhpFHhUw",
  authDomain: "mila-f7294.firebaseapp.com",
  projectId: "mila-f7294",
  storageBucket: "mila-f7294.appspot.com",
  messagingSenderId: "832082245864",
  appId: "1:832082245864:web:39577a1f308a4b8a7c715d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
let auth = getAuth(app);
let storage = getStorage(app);
let timestamp = serverTimestamp;

export {db,auth,storage,timestamp};