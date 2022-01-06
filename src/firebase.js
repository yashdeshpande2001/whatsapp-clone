// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
//import {initializeApp} from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD64aC1Rjk_78BfLEGjOvOfxvQkCPbwXaI",
    authDomain: "whatsapp-clone-26ac5.firebaseapp.com",
    projectId: "whatsapp-clone-26ac5",
    storageBucket: "whatsapp-clone-26ac5.appspot.com",
    messagingSenderId: "703482461307",
    appId: "1:703482461307:web:3676cf66faf693aabeb6de",
    measurementId: "G-8TFEE2K8MG"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };