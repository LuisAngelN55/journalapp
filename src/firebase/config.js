// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaE3WOZIw8QQLNsH6Lhqq8WxgZ9jy59uM",
  authDomain: "react-cursos-a6532.firebaseapp.com",
  projectId: "react-cursos-a6532",
  storageBucket: "react-cursos-a6532.appspot.com",
  messagingSenderId: "973148701776",
  appId: "1:973148701776:web:4020bd1b9bad3955623d55"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );