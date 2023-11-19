import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API,
  authDomain: import.meta.env.VITE_FB_AUTH,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSENGER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage(app);

export const db = getFirestore(app);
