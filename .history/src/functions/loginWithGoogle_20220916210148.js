import { auth } from "../firebase/credenciales";
import { 
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect 
} from "firebase/auth";// metodo para iniciar sesión con google

//función asincrona para iniciar sesión con google
export const loginWithGoogle = async () => {