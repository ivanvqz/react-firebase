import { auth } from "../firebase/credenciales";
import { 
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect 
} from "firebase/auth";// metodo para iniciar sesión con google

//función asincrona para iniciar sesión con google
export const loginWithGoogle = async () => {
    try {
        //creamos una instancia de googleAuthProvider
        const provider = new GoogleAuthProvider();
        
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error);
    }
}