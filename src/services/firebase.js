import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
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
const analytics = getAnalytics(app);

export const db = getDatabase(app);