import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Sign Up
function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Log In
function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Log Out
function logOut() {
  return signOut(auth);
}
