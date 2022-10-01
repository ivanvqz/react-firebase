import { auth } from '../firebase/credenciales';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';

export async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		await signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
	}
}