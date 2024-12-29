// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFPNcUSxAh-Rag6ZdiDRft69HA-fX0joY",
  authDomain: "uncleduckgames-6474e.firebaseapp.com",
  projectId: "uncleduckgames-6474e",
  storageBucket: "uncleduckgames-6474e.firebasestorage.app",
  messagingSenderId: "555515895505",
  appId: "1:555515895505:web:ec3e6276422092a1f22ff0"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const db = getFirestore( app )