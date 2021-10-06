import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDO-cJhC8CKezDWhYRRz51K4qpMKdWFsac",
  authDomain: "bedtimestory-edb60.firebaseapp.com",
  projectId: "bedtimestory-edb60",
  storageBucket: "bedtimestory-edb60.appspot.com",
  messagingSenderId: "508269840519",
  appId: "1:508269840519:web:e93a4ff753858497091022"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   