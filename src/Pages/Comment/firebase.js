
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc4nupr_SHqtJtD0R9S_nNBkD-IkQUTPk",
  authDomain: "coding-geeks-8d6ba.firebaseapp.com",
  projectId: "coding-geeks-8d6ba",
  storageBucket: "coding-geeks-8d6ba.appspot.com",
  messagingSenderId: "704106121302",
  appId: "1:704106121302:web:0ae8ef5fe06ece149a93f7",
  measurementId: "G-WWCVT1R6W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{app,auth};