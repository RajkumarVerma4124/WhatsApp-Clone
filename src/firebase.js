import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGfoGwSgSEvusK8bYixP5hrLwSJ1EQoL0",
    authDomain: "whatsapp-web-chat-rv.firebaseapp.com",
    projectId: "whatsapp-web-chat-rv",
    storageBucket: "whatsapp-web-chat-rv.appspot.com",
    messagingSenderId: "216981862281",
    appId: "1:216981862281:web:adcdaebffc9c81ed465358",
    measurementId: "G-DGBLYD2244"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;