// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeXsXwoEkqj-rIA80qpKpQrb4LWelhNnw",
  authDomain: "dynamic-react-form.firebaseapp.com",
  projectId: "dynamic-react-form",
  storageBucket: "dynamic-react-form.appspot.com",
  messagingSenderId: "58529494987",
  appId: "1:58529494987:web:70f69edad5a50eb87da84e",
  measurementId: "G-S1Z5X1GX31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();