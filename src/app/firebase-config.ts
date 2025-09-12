// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADtbrsZPu4fO4iHwZoI96lucJZspg58VY",
  authDomain: "whispers-c117a.firebaseapp.com",
  projectId: "whispers-c117a",
  storageBucket: "whispers-c117a.firebasestorage.app",
  messagingSenderId: "1018436456025",
  appId: "1:1018436456025:web:01a9b521dd27f84525eb48",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
