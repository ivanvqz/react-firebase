import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";// metodo para crear usuario con email y contraseña

export const registerUser = async (email, password) => {