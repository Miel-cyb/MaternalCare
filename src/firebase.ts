
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJZSPSp7vA-j4DpNe73mBv-St7mCkrlYc",
  authDomain: "preggscare.firebaseapp.com",
  projectId: "preggscare",
  storageBucket: "preggscare.firebasestorage.app",
  messagingSenderId: "230538854523",
  appId: "1:230538854523:web:44a10dda13de52b570e2de"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// IMPORTANT: This line connects to the local Firebase Auth Emulator
// if you are running the app on localhost.
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}
