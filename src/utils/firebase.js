// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Wq12dcnPA8yWkedSqeX31p8VP7K4Akk",
  authDomain: "netflixgpt-b74bd.firebaseapp.com",
  projectId: "netflixgpt-b74bd",
  storageBucket: "netflixgpt-b74bd.firebasestorage.app",
  messagingSenderId: "109731944054",
  appId: "1:109731944054:web:87084866a3a7e6ba1a3157",
  measurementId: "G-1BG1QJSN7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);