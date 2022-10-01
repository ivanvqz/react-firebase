import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";// metodo para crear usuario con email y contraseña

export defconst registerUser = async (email, password) => {
    //
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        // Signed in
    } catch (error) {
        // const errorCode = error.code;
        console.log(error);
    }
}