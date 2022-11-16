import firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmG6vgv8J0y_KpxL4Nq8zLD95lhU04Erc",
  authDomain: "projetinho-c1502.firebaseapp.com",
  projectId: "projetinho-c1502",
  storageBucket: "projetinho-c1502.appspot.com",
  messagingSenderId: "255550505137",
  appId: "1:255550505137:web:2b2b82b9e23a0c40dea290",
  measurementId: "G-15PJ1JS10M"
};

// Initialize Firebase

if (firebase.app.lenght === 0) {
    firebase = firebase.initializeApp(firebaseConfig);
}

export default firebase;