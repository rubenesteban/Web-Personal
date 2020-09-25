import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkjruX3YB-cHPZYETdzStl1lV7ZvtgBb0",
    authDomain: "ruben-maya-web.firebaseapp.com",
    databaseURL: "https://ruben-maya-web.firebaseio.com",
    projectId: "ruben-maya-web",
    storageBucket: "ruben-maya-web.appspot.com",
    messagingSenderId: "470876303833",
    appId: "1:470876303833:web:4208c3d420632dad5729c8",
    measurementId: "G-RR0CEMYMD9"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();