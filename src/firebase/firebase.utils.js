import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAns5DZ8jjzZ9Str_-KupMJa6OueAbwcCw",
    authDomain: "crwn-db-38fc4.firebaseapp.com",
    projectId: "crwn-db-38fc4",
    storageBucket: "crwn-db-38fc4.appspot.com",
    messagingSenderId: "703298960532",
    appId: "1:703298960532:web:e5cf3e057eae223b7b0881",
    measurementId: "G-X37HVE15DQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

