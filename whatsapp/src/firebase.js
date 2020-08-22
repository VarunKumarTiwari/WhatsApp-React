import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD8XNh06hUSyVJOBmH2nxb-hCu0HBAkh7I",
  authDomain: "whatsapp-clone-bb8a7.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-bb8a7.firebaseio.com",
  projectId: "whatsapp-clone-bb8a7",
  storageBucket: "whatsapp-clone-bb8a7.appspot.com",
  messagingSenderId: "991952813775",
  appId: "1:991952813775:web:27d73b12e12b95b5de81ba",
  measurementId: "G-8ZJT9W2H2W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firesotre();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider}
export default db;