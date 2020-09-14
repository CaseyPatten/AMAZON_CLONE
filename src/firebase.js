import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIsvbG9FN-dOq_F5NU-RijO5DSM5KB9_E",
  authDomain: "clone-3f543.firebaseapp.com",
  databaseURL: "https://clone-3f543.firebaseio.com",
  projectId: "clone-3f543",
  storageBucket: "clone-3f543.appspot.com",
  messagingSenderId: "272772530563",
  appId: "1:272772530563:web:620ab5842664d87c7776b6",
  measurementId: "G-QKBWZH349L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
