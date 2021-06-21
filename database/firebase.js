import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjZjbIgL-QnZdGFx_9x8DFsF6Z8QRCcfY",
    authDomain: "id-agricola-app-c707f.firebaseapp.com",
    projectId: "id-agricola-app-c707f",
    storageBucket: "id-agricola-app-c707f.appspot.com",
    messagingSenderId: "831727550059",
    appId: "1:831727550059:web:059de0d9f9cd108996bb2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export default {
    firebase,
    db,

  }