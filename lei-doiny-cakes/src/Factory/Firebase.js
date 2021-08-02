import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhnjJUAGeYhHSNBte7SDFnnklia5WGKHQ",
    authDomain: "lei-doiny-cakes-reactjs.firebaseapp.com",
    projectId: "lei-doiny-cakes-reactjs",
    storageBucket: "lei-doiny-cakes-reactjs.appspot.com",
    messagingSenderId: "295110285740",
    appId: "1:295110285740:web:dfb61b4bcf596036adc209",
    measurementId: "G-837TRN7F87"
};

const DB = firebase.initializeApp(firebaseConfig);
export const GetDB = () => firebase.firestore(DB);
