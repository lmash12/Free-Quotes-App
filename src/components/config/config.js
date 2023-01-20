// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNN1gfqp7ynBrsOd2jJpyzBTf_Q9wEUaQ",
  authDomain: "quotes-6a00c.firebaseapp.com",
  projectId: "quotes-6a00c",
  storageBucket: "quotes-6a00c.appspot.com",
  messagingSenderId: "56613397460",
  appId: "1:56613397460:web:a4a9cc369bb8c735d3ac41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;