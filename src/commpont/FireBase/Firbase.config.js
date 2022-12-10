// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFxptbQPgEGTJyvu1PsjKNSXDhsKnSBvg",
  authDomain: "facebook-9d5ff.firebaseapp.com",
  projectId: "facebook-9d5ff",
  storageBucket: "facebook-9d5ff.appspot.com",
  messagingSenderId: "405505426438",
  appId: "1:405505426438:web:9d8675ae89f75f16daef87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app