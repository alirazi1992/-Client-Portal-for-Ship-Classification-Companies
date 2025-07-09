// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Replace with your own config 👇
const firebaseConfig = {
  apiKey: "AIzaSyDFeXwZu98A8MWEs-5YPNrg3H-JmbC2d8U",
  authDomain: "itsportal-e8eab.firebaseapp.com",
  projectId: "itsportal-e8eab",
  storageBucket: "itsportal-e8eab.firebasestorage.app",
  messagingSenderId: "570914154833",
  appId: "1:570914154833:web:d05ca37ca751c978db0b70",
  measurementId: "G-9ZT887PW1C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
