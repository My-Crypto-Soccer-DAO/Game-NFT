// lib/authService.ts
import { auth, db } from "services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  username: string,
  country: string
) => {
  if (!auth) {
    throw new Error("Firebase Auth não está disponível. Verifique se está no ambiente do cliente.");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (db) {
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        username,
        country
      });
    } else {
      throw new Error("Firebase Firestore não está disponível.");
    }

    return user;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};
