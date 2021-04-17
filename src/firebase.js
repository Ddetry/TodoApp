import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD70SjpBRjx2fUmJWj1KlTVQAbq5B-cr9M",
    authDomain: "todoapp-9f91f.firebaseapp.com",
    projectId: "todoapp-9f91f",
    storageBucket: "todoapp-9f91f.appspot.com",
    messagingSenderId: "430357717980",
    appId: "1:430357717980:web:8e4cd7e06e0be055342519",
    measurementId: "G-73Z96TBWZE"
});

const db = firebaseApp.firestore();

export default db;
