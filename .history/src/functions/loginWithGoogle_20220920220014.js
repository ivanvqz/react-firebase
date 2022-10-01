import { auth } from '../firebase/credenciales';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';

export function async loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
	}
}