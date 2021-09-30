
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAw3yXjcam7HJaS0ThALIMoZ_ICUR9V1k",
  authDomain: "insta-536de.firebaseapp.com",
  projectId: "insta-536de",
  storageBucket: "insta-536de.appspot.com",
  messagingSenderId: "859496964055",
  appId: "1:859496964055:web:8a1ddf6dc33cbef83a3592",
  measurementId: "G-SVXSQ39P6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
