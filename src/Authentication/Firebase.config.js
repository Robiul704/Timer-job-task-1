// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAseXEPj5UBIu68WsiieoFhSEaIDgP6PW4",
  authDomain: "dragon-news-e137e.firebaseapp.com",
  projectId: "dragon-news-e137e",
  storageBucket: "dragon-news-e137e.appspot.com",
  messagingSenderId: "182555489705",
  appId: "1:182555489705:web:2f90640c6abe23be10c0b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth