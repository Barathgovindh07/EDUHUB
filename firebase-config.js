import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Replace these with the actual SDK keys you got from the Firebase Console
  const firebaseConfig = {
    apiKey: "AIzaSyB_aL62baq0wj7A6dlbMySmmpv7NkltFmw",
    authDomain: "eduhub-36c5e.firebaseapp.com",
    projectId: "eduhub-36c5e",
    storageBucket: "eduhub-36c5e.firebasestorage.app",
    messagingSenderId: "737474819545",
    appId: "1:737474819545:web:25e8a4a725a7e132b715c8",
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);