import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
   apiKey: "AIzaSyDnRBLLy71KVZ7NSW-rceOrse7mPNMbrIU",
    authDomain: "coderhouse-ecommerce-espindola.firebaseapp.com",
    projectId: "coderhouse-ecommerce-espindola",
    storageBucket: "coderhouse-ecommerce-espindola.appspot.com",
    messagingSenderId: "714352427847",
    appId: "1:714352427847:web:56e9e22a3e1131a94e0262"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
