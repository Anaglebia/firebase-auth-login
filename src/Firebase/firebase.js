import {GoogleAutheProvider,getAuth, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,signOut,}from "firebase/auth";
import {getFirestore, query,getDocs, collection, where,addDoc,} from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC--pLpLz0XhCSJhEyCKvGk1lHQ1niqPzA",
  authDomain: "fir-auth-login-a017f.firebaseapp.com",
  projectId: "fir-auth-login-a017f",
  storageBucket: "fir-auth-login-a017f.appspot.com",
  messagingSenderId: "103520570539",
  appId: "1:103520570539:web:4621402ddfca3d0d23bbee",
  measurementId: "G-BGYLHTBPCQ"
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const auth = getAuth ( app ); 
const db = getFirestore ( app );

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);