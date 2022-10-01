import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";// metodo para crear usuario con email y contraseña

export const registerUser = async (email, password) => {
    //
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        // Signed in
    } catch (error) {
        // const errorCode = error.code;
        console.log(error);
    }
}