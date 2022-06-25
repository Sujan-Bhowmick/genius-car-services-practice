// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAAlUTBXjTalKMtzoKU5ZPYN_2I3R5gckU",
  authDomain:"genius-car-services-cb5c1.firebaseapp.com",
  projectId:"genius-car-services-cb5c1",
  storageBucket:"genius-car-services-cb5c1.appspot.com",
  messagingSenderId:"931907200111",
  appId:"1:931907200111:web:de62964d159363d27b599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;