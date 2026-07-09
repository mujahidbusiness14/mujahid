import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxciRbRM8KdodljcRR1fcvhlGjw_ssmHo",
  authDomain: "encouraging-trilogy-3mln4.firebaseapp.com",
  projectId: "encouraging-trilogy-3mln4",
  storageBucket: "encouraging-trilogy-3mln4.firebasestorage.app",
  messagingSenderId: "230726986369",
  appId: "1:230726986369:web:007fd166f60dbad846bb80",
  databaseId: "ai-studio-8e82f9d4-c284-4d8d-b0ab-f35167edd79d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);