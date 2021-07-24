import firebase from 'firebase';

require('firebase/firestore')
require('dotenv').config()

const firebaseConfig = {
    apiKey: "AIzaSyAUBKXkCVgi9ueocNOs03jNDHpLHMpBRfo",
    authDomain: "bookclub-def4c.firebaseapp.com",
    projectId: "bookclub-def4c",
    storageBucket: "bookclub-def4c.appspot.com",
    messagingSenderId: "211966776376",
    appId: "1:211966776376:web:1367f78af7efb03038c2cd",
    measurementId: "G-45PDBGSPP2"
  };

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();


export default db;