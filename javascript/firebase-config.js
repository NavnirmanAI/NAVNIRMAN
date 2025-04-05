// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// or import { getDatabase } from "firebase-database" if using RTDB

const firebaseConfig = {
  apiKey: "AIzaSyDtOWJd8duOmOctCfEQQESRY817v5dRH1k",
  authDomain: "navnirmanai-1a761.firebaseapp.com",
  databaseURL: "https://navnirmanai-1a761-default-rtdb.firebaseio.com",
  projectId: "navnirmanai-1a761",
  storageBucket: "navnirmanai-1a761.firebasestorage.app",
  messagingSenderId: "569693452065",
  appId: "1:569693452065:web:01f06b5440983539bb060",
  measurementId: "G-5D326KJ51W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
