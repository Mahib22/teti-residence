import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU7KNWuunLFoWKiRQ6WZ9FuiTAU1NisVA",
  authDomain: "website-be.firebaseapp.com",
  databaseURL:
    "https://website-be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-be",
  storageBucket: "website-be.appspot.com",
  messagingSenderId: "172131980013",
  appId: "1:172131980013:web:27518a483fc399e68672e4",
  measurementId: "G-RH5SPSGKZW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
