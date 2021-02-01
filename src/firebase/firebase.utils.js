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


export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            //Create method
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }); 
        } catch (error) {
            console.log("error create user", error.message);
        }

        return userRef;
    }
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;