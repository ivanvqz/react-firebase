import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";// metodo para iniciar sesión con email y contraseña

//función asincrona para iniciar sesión con email y contraseña
export const loginWithEmailPassword = async (auth, email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
}