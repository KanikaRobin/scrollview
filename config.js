// import * as firebase from 'firebase'
// require('@firebase/firestore')


// var firebaseConfig = {
//   apiKey: "AIzaSyA_tex1nTeaTWStaAwwdPv608P8Cmd9hHo",
//   authDomain: "wily-app-74be0.firebaseapp.com",
//   databaseURL: "https://wily-app-74be0.firebaseio.com",
//   projectId: "wily-app-74be0",
//   storageBucket: "wily-app-74be0.appspot.com",
//   messagingSenderId: "461650901041",
//   appId: "1:461650901041:web:41229f539ba079f16dbd10"
// };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   export default firebase.firestore();
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_tex1nTeaTWStaAwwdPv608P8Cmd9hHo",
  authDomain: "wily-app-74be0.firebaseapp.com",
  databaseURL: "https://wily-app-74be0.firebaseio.com",
  projectId: "wily-app-74be0",
  storageBucket: "wily-app-74be0.appspot.com",
  messagingSenderId: "461650901041",
  appId: "1:461650901041:web:41229f539ba079f16dbd10"
};
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Other file
//import firebase from '../firebase';