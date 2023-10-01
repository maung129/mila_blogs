import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase/config'
import { ref } from 'vue';


const getUser = () => {
    let user = ref(auth.currentUser);

    onAuthStateChanged(auth,(_user) => {
        user.value = _user;
    })
    return user;
}


export default getUser;