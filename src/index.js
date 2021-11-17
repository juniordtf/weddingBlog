import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/AppleChancery/Apple-Chancery.ttf";
import "./fonts/AndaleMono/Andale-Mono.ttf";
import "./fonts/LucidaCalligraphy/Lucida-Calligraphy.ttf";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyDcfw7oaBYN3wnzLuVhUOzO_bRPb_Fj8x0",
  authDomain: "wedding-blog-326910.firebaseapp.com",
  databaseURL: "https://wedding-blog-326910-default-rtdb.firebaseio.com",
  projectId: "wedding-blog-326910",
  storageBucket: "wedding-blog-326910.appspot.com",
  messagingSenderId: "1008104200366",
  appId: "1:1008104200366:web:b42b9b7a3c77d9e839353f",
  measurementId: "G-5ECKCZS3MD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
