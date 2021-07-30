import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAhnjJUAGeYhHSNBte7SDFnnklia5WGKHQ",
    authDomain: "lei-doiny-cakes-reactjs.firebaseapp.com",
    projectId: "lei-doiny-cakes-reactjs",
    storageBucket: "lei-doiny-cakes-reactjs.appspot.com",
    messagingSenderId: "295110285740",
    appId: "1:295110285740:web:dfb61b4bcf596036adc209",
    measurementId: "G-837TRN7F87"
});

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}