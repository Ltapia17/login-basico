import firebase from 'firebase'
import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
