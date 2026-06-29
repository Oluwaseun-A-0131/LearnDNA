// Firebase SDK CDN Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuration from firebase-applet-config.json
const firebaseConfig = {
  projectId: "learndna-v1",
  appId: "1:428055221778:web:1a50cdc7cbe859ac662acb",
  apiKey: "AIzaSyCLPiqnAPK6QmE3eIMnCKFAAQ3ohLbFO3A",
  authDomain: "learndna-v1.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-learndna-7b61185d-6f34-4fb3-b3e8-099062ffe131",
  storageBucket: "learndna-v1.firebasestorage.app",
  messagingSenderId: "428055221778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export { auth, db };
