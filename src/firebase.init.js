// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAixxOvZYY3DN3iDJERhoLcVLfRk6TEy5I",
    authDomain: "doctors-portal-1f725.firebaseapp.com",
    projectId: "doctors-portal-1f725",
    storageBucket: "doctors-portal-1f725.appspot.com",
    messagingSenderId: "238878009714",
    appId: "1:238878009714:web:dc9c9b6d1e1c9ffa1815eb"
//   apiKey:process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGEB_UCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
