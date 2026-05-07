import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPiETuECzXIHEbzQ0QW57Lz1Mi1cGQDZs",
  authDomain: "planit-b6e6f.firebaseapp.com",
  projectId: "planit-b6e6f",
  storageBucket: "planit-b6e6f.firebasestorage.app",
  messagingSenderId: "555515401998",
  appId: "1:555515401998:web:95eb7bb9500c278d82a95f",
  measurementId: "G-Y04PYFFS51"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
export const auth = getAuth(app);
export const db = getFirestore(app);

// Provider de Google
export const provider = new GoogleAuthProvider();