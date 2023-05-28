// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMviTU1qT-k0yUqIvi61ZBY40PqnM0NeI",
  authDomain: "chitting-app.firebaseapp.com",
  projectId: "chitting-app",
  storageBucket: "chitting-app.appspot.com",
  messagingSenderId: "255327519652",
  appId: "1:255327519652:web:9942425840d19a0fc3f731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig