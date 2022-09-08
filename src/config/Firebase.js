// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNQZ9GjJ196Tm7I7VfZNVzMgBdxy-A_g",
  authDomain: "kembang15-accd4.firebaseapp.com",
  projectId: "kembang15-accd4",
  storageBucket: "kembang15-accd4.appspot.com",
  messagingSenderId: "624366280103",
  appId: "1:624366280103:web:ec03419a71959432442a82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
