// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpsHmoF1_qkPNGthq7QzC7kOX-ce5A1GU",
  authDomain: "sports-events-c37b9.firebaseapp.com",
  projectId: "sports-events-c37b9",
  storageBucket: "sports-events-c37b9.appspot.com",
  messagingSenderId: "30047919735",
  appId: "1:30047919735:web:0a6183a723b34b73e87072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth