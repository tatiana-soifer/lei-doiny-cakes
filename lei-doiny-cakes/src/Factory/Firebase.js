import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig =  ({
    apiKey: process.env.REACT_APP_API_KEY,    
    authDomain: "lei-doiny-cakes-reactjs.firebaseapp.com",
    projectId: "lei-doiny-cakes-reactjs",
    storageBucket: "lei-doiny-cakes-reactjs.appspot.com",
    messagingSenderId: "295110285740",
    appId: "1:295110285740:web:dfb61b4bcf596036adc209",
    measurementId: "G-837TRN7F87"
});

const app = firebase.initializeApp(firebaseConfig)  
export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);