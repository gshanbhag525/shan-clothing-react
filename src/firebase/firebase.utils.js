import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbjBLIC5Erv5mBH5B22TBYvCX00m5TdJA",
    authDomain: "gshan-db.firebaseapp.com",
    projectId: "gshan-db",
    storageBucket: "gshan-db.appspot.com",
    messagingSenderId: "1074428572694",
    appId: "1:1074428572694:web:6b67dd6c8f5d5404797137",
    measurementId: "G-BGDBLZ3FVQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({  prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
