// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAKTvOqrtFAeaDAswFkfh71HAcdA7hGzDM",
  authDomain: "dp-web-db.firebaseapp.com",
  projectId: "dp-web-db",
  storageBucket: "dp-web-db.appspot.com",
  messagingSenderId: "17404697515",
  appId: "1:17404697515:web:aab98490aba5ba1e7650ee",
  measurementId: "G-ME6RS591XH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
