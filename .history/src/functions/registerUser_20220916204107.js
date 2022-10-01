import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";// metodo para crear usuario con email y contraseña

export const registerUser = async (email, password) => {

    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
}