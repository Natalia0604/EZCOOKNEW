import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC8NfAxoRxZlB--rBhgVx720CoVMLum-Lw",
    authDomain: "ezcook0706.firebaseapp.com",
    databaseURL: "https://ezcook0706-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ezcook0706",
    storageBucket: "ezcook0706.appspot.com",
    messagingSenderId: "654814771933",
    appId: "1:654814771933:web:ac3b33677618ff10427934"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore();
const auth = firebase.auth();
const storage=firebase.storage();
firebase.settings({timestampsInSnapshots: true}) //
export {firebaseConfig,firestore,auth,storage};