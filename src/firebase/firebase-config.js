import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCKYAqfIoPbkP6FZzMMhSAD4bFzRfRjHt0",
  authDomain: "my-blog-ca5ee.firebaseapp.com",
  projectId: "my-blog-ca5ee",
  storageBucket: "my-blog-ca5ee.appspot.com",
  messagingSenderId: "60973564348",
  appId: "1:60973564348:web:2e247664479fa66de36bb9",
  measurementId: "G-NBRTVYKC36"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const auth = getAuth(app)
export default db 