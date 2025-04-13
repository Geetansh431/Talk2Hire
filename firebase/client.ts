
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAu3c3kMHV9oteWakzzn5LXyu8yKX3tbf0",
  authDomain: "talk2hire-bfe39.firebaseapp.com",
  projectId: "talk2hire-bfe39",
  storageBucket: "talk2hire-bfe39.firebasestorage.app",
  messagingSenderId: "129508234159",
  appId: "1:129508234159:web:46988716899a0ce182d55a",
  measurementId: "G-623LGVH9WQ"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
