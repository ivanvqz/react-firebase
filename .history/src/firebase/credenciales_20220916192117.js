// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDly-cH24wPrW9HJswyo3vRHSHXmrGFJuM",
    authDomain: "primer-app-con-react.firebaseapp.com",
    projectId: "primer-app-con-react",
    storageBucket: "primer-app-con-react.appspot.com",
    messagingSenderId: "456461955534",
    appId: "1:456461955534:web:deb3369a0cfd1e237b7b9f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp