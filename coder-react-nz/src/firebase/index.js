// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlHBEp5Dm1PP61jAFd_KYGkbN2o2NYAGI",
  authDomain: "panda-react.firebaseapp.com",
  projectId: "panda-react",
  storageBucket: "panda-react.appspot.com",
  messagingSenderId: "726526414464",
  appId: "1:726526414464:web:9bb5833470598f43442065",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
