import { auth } from '../firebase/credenciales';
import { signOut } from 'firebase/auth';

export const logOut = async () => {
    try {
        await signOut(auth);
        console.log('saliste');
    } catch (error) {
        console.log(error);
    }
}