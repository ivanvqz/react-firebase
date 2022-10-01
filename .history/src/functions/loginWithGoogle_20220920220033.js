import { auth } from '../firebase/credenciales';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';

export function async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
	}
}