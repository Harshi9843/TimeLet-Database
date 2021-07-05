import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB7yBkA_vOUrC_e2j-yWllH2nSdZiNfo5U",
    authDomain: "timelet-67d93.firebaseapp.com",
    projectId: "timelet-67d93",
    storageBucket: "timelet-67d93.appspot.com",
    messagingSenderId: "316958908480",
    appId: "1:316958908480:web:a668de1200606848b37fa5"
  };

//Initialise Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();