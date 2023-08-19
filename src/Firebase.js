// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Ch6-XeSCoy4uvSc2LEr88_zFTlMwUEM",
  authDomain: "dev-f5a21.firebaseapp.com",
  projectId: "dev-f5a21",
  storageBucket: "dev-f5a21.appspot.com",
  messagingSenderId: "898816768304",
  appId: "1:898816768304:web:c3c257c376c854841b70f5",
  measurementId: "G-FHVYFZMHL0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);