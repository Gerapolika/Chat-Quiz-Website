import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD5V0uERum9512Gbk3ItD0bhUBZip0cmFg",
    authDomain: "chat-quiz-website.firebaseapp.com",
    databaseURL: "https://chat-quiz-website-default-rtdb.firebaseio.com",
    projectId: "chat-quiz-website",
    storageBucket: "chat-quiz-website.appspot.com",
    messagingSenderId: "780853305645",
    appId: "1:780853305645:web:d3ae995d8d8064a2c473a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
 const database = firebase.database();
 const storeDB = firebase.firestore();
 const storage = firebase.storage();

const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }
  

const signOut = () => {
    firebase.auth().signOut();
}


export {signIn, signOut, database, storeDB, storage}
