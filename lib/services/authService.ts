import { auth, db } from "../firebaseConfig"; // Caminho corrigido
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (email: string, password: string, username: string, country: string) => {
  // Cria um usuário usando o Firebase Authentication
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // O usuário é obtido a partir do userCredential
  const user = userCredential.user;

  // Armazenar dados do usuário no Firestore
  await setDoc(doc(db, "users", user.uid), {
    username,
    country,
    email,
    createdAt: new Date(),
  });

  return user;
};
