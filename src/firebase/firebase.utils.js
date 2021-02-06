import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAImCfhnMxXL0ChZWtt2hTFmPTTAJLavnA",
    authDomain: "crwn-db-d951c.firebaseapp.com",
    projectId: "crwn-db-d951c",
    storageBucket: "crwn-db-d951c.appspot.com",
    messagingSenderId: "458678182843",
    appId: "1:458678182843:web:4ab22c11642f69ba1a9a9e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;