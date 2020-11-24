import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyB7klPnsTgdWqhwm5jCFUhZQseahvuSrL8",
  authDomain: "parveer-c94b1.firebaseapp.com",
  databaseURL: "https://parveer-c94b1.firebaseio.com",
  projectId: "parveer-c94b1",
  storageBucket: "parveer-c94b1.appspot.com",
  messagingSenderId: "321746537108",
  appId: "1:321746537108:web:6858aa09a7c0c5809a8281",
  measurementId: "G-1Q7WF49ZDN"
};


var Fire = firebase.initializeApp(Config);
export default Fire;