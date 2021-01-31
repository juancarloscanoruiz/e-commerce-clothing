import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCMe50LiSFTVGUpHMyys-nxxj4kYCa0A6k",
    authDomain: "e-commerce-db-d1cba.firebaseapp.com",
    projectId: "e-commerce-db-d1cba",
    storageBucket: "e-commerce-db-d1cba.appspot.com",
    messagingSenderId: "678771349464",
    appId: "1:678771349464:web:37a9c56bbe15b7108c04ad"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;