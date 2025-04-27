// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfORMup78HsaeU5gVfKXG7en8eIdR5XRk",
  authDomain: "explore-email-password-a-406da.firebaseapp.com",
  projectId: "explore-email-password-a-406da",
  storageBucket: "explore-email-password-a-406da.firebasestorage.app",
  messagingSenderId: "721409814423",
  appId: "1:721409814423:web:c898eae7767a580017ded2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);