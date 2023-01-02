import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDScKaKOpOaoFeE2pPjLUWdROQCd8DmQVg",
  authDomain: "whatsapp-df969.firebaseapp.com",
  projectId: "whatsapp-df969",
  storageBucket: "whatsapp-df969.appspot.com",
  messagingSenderId: "990068252219",
  appId: "1:990068252219:web:65a84332566d30018e861e",
  measurementId: "G-T8XQ2MCS3R",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
