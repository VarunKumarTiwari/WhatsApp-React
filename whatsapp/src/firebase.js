import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCzaq9o5mD5h-lkpT0nFbgqAch8go4-yAY",
  authDomain: "whatsapp-d7787.firebaseapp.com",
  databaseURL: "https://whatsapp-d7787.firebaseio.com",
  projectId: "whatsapp-d7787",
  storageBucket: "whatsapp-d7787.appspot.com",
  messagingSenderId: "284753278878",
  appId: "1:284753278878:web:75edf0f51856b994e3488f",
  measurementId: "G-CKWZDTXSZ2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;