// import { auth } from '../firebase/credenciales';
// import {
// 	GoogleAuthProvider,
// 	signInWithPopup,
// 	signInWithRedirect,
// } from 'firebase/auth';

// export async function loginWithGoogle() {
// 	try {
// 		const provider = new GoogleAuthProvider();
// 		awaitsignInWithRedirect(auth, provider);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

import { auth } from '../firebase/credenciales';
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth';

async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
	}
}

export default LoginW