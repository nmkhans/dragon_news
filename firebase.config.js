import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: "AIzaSyDT6oDkHmplNjv4YcikYw1j29p_4IYMu_k",
  authDomain: "nmk-dragon-news.firebaseapp.com",
  projectId: "nmk-dragon-news",
  storageBucket: "nmk-dragon-news.firebasestorage.app",
  messagingSenderId: "999805064100",
  appId: "1:999805064100:web:58ee0c330871010e94e731",
}; */

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
