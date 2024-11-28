// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDok3wT5OhvhMOXUrJlzqZ1kziL2ttbY-U",
  authDomain: "forestwatch-cf457.firebaseapp.com",
  projectId: "forestwatch-cf457",
  storageBucket: "forestwatch-cf457.firebasestorage.app",
  messagingSenderId: "85411124132",
  appId: "1:85411124132:web:4e571fb8a585ac3dee2731",
  measurementId: "G-2MNLLLWJEG" // This is optional for authentication
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export the auth object for use in your app