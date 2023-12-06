 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIRAfGHVLgVcS9HYJIPrrwmClrzr3noCk",
  authDomain: "notes-app-d25ec.firebaseapp.com",
  projectId: "notes-app-d25ec",
  storageBucket: "notes-app-d25ec.appspot.com",
  messagingSenderId: "1027757272873",
  appId: "1:1027757272873:web:abe339496879ed56c7d138",
  measurementId: "G-8PYPZVRKG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app)
export const notesCollection=collection(db,'notes')