import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCFUkm9LoyfpimnYuncqMwPHGTy_uU0MsI",
    authDomain: "parveer-7c97a.firebaseapp.com",
    databaseURL: "https://parveer-7c97a.firebaseio.com",
    projectId: "parveer-7c97a",
    storageBucket: "parveer-7c97a.appspot.com",
    messagingSenderId: "846467271849",
    appId: "1:846467271849:web:780f5e9fa25f3fbc6b6db8",
    measurementId: "G-SN8KQ1QW5T"
  };



  const fire = firebase.initializeApp(firebaseConfig)
   
  //export const PROVIDER_GOOGLE = new firebase.auth.GoogleAuthProvider() 
  export default fire;
 