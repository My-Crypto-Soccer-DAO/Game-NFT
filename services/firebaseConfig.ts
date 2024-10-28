// firebaseConfig.ts
"use client";

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQSWr3P_IG65mZr52eWQLKLanYd9VSrMo",
  authDomain: "my-crypto-soccer-dao.firebaseapp.com",
  projectId: "my-crypto-soccer-dao",
  storageBucket: "my-crypto-soccer-dao.appspot.com",
  messagingSenderId: "642600126171",
  appId: "1:642600126171:web:29deb46539c52316462efe",
  measurementId: "G-CTZG6M1FDL"
};

// Inicializa o Firebase apenas uma vez
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa o Auth e Firestore
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Inicializa o Analytics somente no cliente (para evitar erros SSR)
export const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
