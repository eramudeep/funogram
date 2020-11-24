import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB7klPnsTgdWqhwm5jCFUhZQseahvuSrL8",
  authDomain: "parveer-c94b1.firebaseapp.com",
  databaseURL: "https://parveer-c94b1.firebaseio.com",
  projectId: "parveer-c94b1",
  storageBucket: "parveer-c94b1.appspot.com",
  messagingSenderId: "321746537108",
  appId: "1:321746537108:web:6858aa09a7c0c5809a8281",
  measurementId: "G-1Q7WF49ZDN"
  };


  const fire = firebase.initializeApp(firebaseConfig)
   
  //export const PROVIDER_GOOGLE = new firebase.auth.GoogleAuthProvider() 
  export default fire;
 