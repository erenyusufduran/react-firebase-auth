import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDc-ukALVxqxRZBVbpQqsSnS04esTBLlN4",
  authDomain: "react-firebase-auth-8a981.firebaseapp.com",
  projectId: "react-firebase-auth-8a981",
  storageBucket: "react-firebase-auth-8a981.appspot.com",
  messagingSenderId: "1007941453460",
  appId: "1:1007941453460:web:17cd13523c0ee828689681",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
