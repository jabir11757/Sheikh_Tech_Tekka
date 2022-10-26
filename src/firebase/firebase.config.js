// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJaxVzJt1XEvby6ufS4De-tI0gDHff684",
    authDomain: "sheikh-tech-tekka.firebaseapp.com",
    projectId: "sheikh-tech-tekka",
    storageBucket: "sheikh-tech-tekka.appspot.com",
    messagingSenderId: "967237380498",
    appId: "1:967237380498:web:3d3211d9ea91ed586af94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;