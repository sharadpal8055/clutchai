// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7SqIYsGx-UQoXggDQ2YAQgfDWDu5Gm7c",
  authDomain: "clutch-ai-4138b.firebaseapp.com",
  projectId: "clutch-ai-4138b",
  storageBucket: "clutch-ai-4138b.firebasestorage.app",
  messagingSenderId: "968669328097",
  appId: "1:968669328097:web:73cd9ac61ab5aeac19bda0",
  measurementId: "G-QBBYPX9FXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);