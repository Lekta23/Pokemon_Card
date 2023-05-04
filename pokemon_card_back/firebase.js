// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHATdUTz78M0tu0n-vbdi2wtw03D3H1m0",
  authDomain: "pokemoncard-e7a31.firebaseapp.com",
  projectId: "pokemoncard-e7a31",
  storageBucket: "pokemoncard-e7a31.appspot.com",
  messagingSenderId: "630117630684",
  appId: "1:630117630684:web:2dac2765fe3ba344612a19",
  measurementId: "G-TT7CMTXEKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);