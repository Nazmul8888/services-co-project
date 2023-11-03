// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1-5PIvqy6SWEn-gxB8UGbFtgtJScg43s",
  authDomain: "services-co-project.firebaseapp.com",
  projectId: "services-co-project",
  storageBucket: "services-co-project.appspot.com",
  messagingSenderId: "572513594103",
  appId: "1:572513594103:web:ea080c6423f8d00e1b01f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;