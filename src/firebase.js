import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKkfa3XWdPxG-jLNlWYim53uu6Xue0wTM",
  authDomain: "task-manager-296b1.firebaseapp.com",
  projectId: "task-manager-296b1",
  storageBucket: "task-manager-296b1.appspot.com",
  messagingSenderId: "928027994832",
  appId: "1:928027994832:web:e8bd760cc33dc044994cd5",
  measurementId: "G-CTL4PWCE9X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
