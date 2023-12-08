// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUo9zqd6qx_IvsKeVJX6xAxxpKUPeyang",
  authDomain: "helpdesk-react-518c0.firebaseapp.com",
  projectId: "helpdesk-react-518c0",
  storageBucket: "helpdesk-react-518c0.appspot.com",
  messagingSenderId: "198954072385",
  appId: "1:198954072385:web:3e339a7fa33ceb2cb0c9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;