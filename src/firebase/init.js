import firebase from 'firebase'
import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyBzQ_iGj9t4bpmshFxRlvsVLdGa88wbn_Q",
    authDomain: "vuejs-91219.firebaseapp.com",
    databaseURL: "https://vuejs-91219.firebaseio.com",
    projectId: "vuejs-91219",
    storageBucket: "",
    messagingSenderId: "963217498345",
    appId: "1:963217498345:web:12a8cce7ac54ac39bc5078"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
