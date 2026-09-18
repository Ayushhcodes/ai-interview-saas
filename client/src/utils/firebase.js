
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "recreuitiq.firebaseapp.com",
  projectId: "recreuitiq",
  storageBucket: "recreuitiq.firebasestorage.app",
  messagingSenderId: "563200733827",
  appId: "1:563200733827:web:0dbfd614863aac49eb21b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}