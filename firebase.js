import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";




const firebaseConfig = {
//PASTE YOUR FIREBASE CONFIG FILES HERE 
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
