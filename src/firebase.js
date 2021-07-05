import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKqdbMNH_9o_JpzLH5mMP4Hruhm3bm2z8",
  authDomain: "netflix-clone-app-49f56.firebaseapp.com",
  projectId: "netflix-clone-app-49f56",
  storageBucket: "netflix-clone-app-49f56.appspot.com",
  messagingSenderId: "1001260735267",
  appId: "1:1001260735267:web:7eea37d2be52635a82ca96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
