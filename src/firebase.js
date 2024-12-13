// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwzfYOXra2QfdBPU_u8M8Ibkzq1tfa0eY",
  authDomain: "doodle-market.firebaseapp.com",
  projectId: "doodle-market",
  storageBucket: "doodle-market.firebasestorage.app",
  messagingSenderId: "159269161089",
  appId: "1:159269161089:web:c47bec764fe315d4f3e580",
  measurementId: "G-GS3Y7RL0F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();