// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDjMUDWcd8pYeYvG9K2nRuhzge3KEF2kCI",
  authDomain: "personal-portifolio-3a27a.firebaseapp.com",
  projectId: "personal-portifolio-3a27a",
  storageBucket: "personal-portifolio-3a27a.appspot.com",
  messagingSenderId: "820796630568",
  appId: "1:820796630568:web:0770f32bbd1e94e446f71d",
  measurementId: "G-8FDBJS65QK"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
