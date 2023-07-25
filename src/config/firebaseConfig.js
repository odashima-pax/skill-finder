import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCptz1cdkM9qmhB4VCw6gsXgB5Opd188G4",
    authDomain: "skill-finder-c3489.firebaseapp.com",
    projectId: "skill-finder-c3489",
    storageBucket: "skill-finder-c3489.appspot.com",
    messagingSenderId: "624756095095",
    appId: "1:624756095095:web:3d2840e46b1bee4ed8ae72",
    measurementId: "G-XW3ZZ6EXMK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };