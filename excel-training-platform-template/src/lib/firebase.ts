import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW80_IP_j0TITx84whPNfdEKE0ch-UqYE",
  authDomain: "index-a43cf.firebaseapp.com",
  projectId: "index-a43cf",
  storageBucket: "index-a43cf.firebasestorage.app",
  messagingSenderId: "321817502015",
  appId: "1:321817502015:web:3a99f74a012200cc4cb38a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
