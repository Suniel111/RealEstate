// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-94aca.firebaseapp.com",
    projectId: "mern-estate-94aca",
    storageBucket: "mern-estate-94aca.appspot.com",
    messagingSenderId: "391228652394",
    appId: "1:391228652394:web:13520e1b9ce137a2738313"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);