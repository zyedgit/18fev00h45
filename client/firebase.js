// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "glo2022-20h31.firebaseapp.com",
  projectId: "glo2022-20h31",
  storageBucket: "glo2022-20h31.appspot.com",
  messagingSenderId: "712039259017",
  appId: "1:712039259017:web:0416329d8b9f752a74df58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);