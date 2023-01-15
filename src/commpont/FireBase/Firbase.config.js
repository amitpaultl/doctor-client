// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpoKA5tbKGtqCByv18_lmzEUgQbTpEbw",
  authDomain: "doctor-protal-76536.firebaseapp.com",
  projectId: "doctor-protal-76536",
  storageBucket: "doctor-protal-76536.appspot.com",
  messagingSenderId: "94739495622",
  appId: "1:94739495622:web:1b3d10e99efa4d688ff5c7",
  measurementId: "G-MWFRQ27B1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app