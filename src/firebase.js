import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiWj31b4o0r_vdteEWlOyAA-Jr3JMYMcQ",
  authDomain: "slack-clone-sk.firebaseapp.com",
  projectId: "slack-clone-sk",
  storageBucket: "slack-clone-sk.appspot.com",
  messagingSenderId: "890227338527",
  appId: "1:890227338527:web:8abcbc33bac4c82d30542a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }