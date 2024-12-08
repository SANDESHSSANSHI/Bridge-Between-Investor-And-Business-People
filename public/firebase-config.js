import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBysXOlYivEn0Xgq_jPRPtX40z-6wal91c",
  authDomain: "trial-ef79c.firebaseapp.com",
  databaseURL: "https://trial-ef79c-default-rtdb.firebaseio.com",
  projectId: "trial-ef79c",
  storageBucket: "trial-ef79c.firebasestorage.app",
  messagingSenderId: "340982645687",
  appId: "1:340982645687:web:38ca6a5a273f68549cde32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
