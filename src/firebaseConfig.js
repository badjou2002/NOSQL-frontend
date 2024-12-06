// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkJpfs1nJ-UR5P-f1kJQOzV7GKqmrUEyU",
    authDomain: "pfe2024-fa6a6.firebaseapp.com",
    projectId: "pfe2024-fa6a6",
    storageBucket: "pfe2024-fa6a6.appspot.com",
    messagingSenderId: "177553705324",
    appId: "1:177553705324:web:f1b976b282650db7c94b49",
    measurementId: "G-SJLW4QK9FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;