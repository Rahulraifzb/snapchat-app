import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD9mxvujF-1HIm9mguM5p82QEHxfWemS_M",
    authDomain: "snapchat-app-14798.firebaseapp.com",
    projectId: "snapchat-app-14798",
    storageBucket: "snapchat-app-14798.appspot.com",
    messagingSenderId: "797049188807",
    appId: "1:797049188807:web:6aee2ffcfcaf88366329e2",
    measurementId: "G-TNG9TBCVZX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
var provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,storage,provider};