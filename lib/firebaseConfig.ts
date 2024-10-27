import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQSWr3P_IG65mZr52eWQLKLanYd9VSrMo",
  authDomain: "my-crypto-soccer-dao.firebaseapp.com",
  projectId: "my-crypto-soccer-dao",
  storageBucket: "my-crypto-soccer-dao.appspot.com",
  messagingSenderId: "642600126171",
  appId: "1:642600126171:web:29deb46539c52316462efe",
  measurementId: "G-CTZG6M1FDL" // Incluído o measurementId para o Google Analytics
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Inicialize o Analytics apenas no navegador
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
