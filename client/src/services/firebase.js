// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNJhpcTVOC7M8dDW53E_e09FzKfWBp5A8",
  authDomain: "safepulse-web.firebaseapp.com",
  projectId: "safepulse-web",
  storageBucket: "safepulse-web.appspot.com",
  messagingSenderId: "141327838676",
  appId: "1:141327838676:web:3c6bd154bdbae03a33fa41",
  measurementId: "G-JTS576D6C2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
