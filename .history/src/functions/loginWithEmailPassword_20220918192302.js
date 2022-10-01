import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";// metodo para iniciar sesión con email y contraseña

//función asincrona para iniciar sesión con email y contraseña
export async function loginWithEmailPassword(auth, email, password) {
    try {
        const userC = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}