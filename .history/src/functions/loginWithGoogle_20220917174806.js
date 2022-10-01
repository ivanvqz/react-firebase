import { auth } from "../firebase/credenciales";
import { 
    GoogleAuthProvider,
    signInWithRedirect 
} from "firebase/auth";// metodo para iniciar sesión con google

//función asincrona para iniciar sesión con google
export async function loginWithGoogle() {
    try {
        //creamos una instancia de googleAuthProvider
        const provider = new GoogleAuthProvider();
        //le decimos que queremos que nos de acceso a la cuenta de google
        // await signInWithPopup(auth, provider);
        await signInWithRedirect(auth, provider);
    } catch (error) {
        console.log(error);
    }
}