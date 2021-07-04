import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCUIn7s0dm5d8KZP07VPC6hBSpXwMvn4L8",
  authDomain: "signal-clone-a4882.firebaseapp.com",
  projectId: "signal-clone-a4882",
  storageBucket: "signal-clone-a4882.appspot.com",
  messagingSenderId: "9437276043",
  appId: "1:9437276043:web:8bf06a3651655e4048f18e"
};


  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth }; 