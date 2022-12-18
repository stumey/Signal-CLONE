import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "",
  authDomain: "signal-clone-70d43.firebaseapp.com",
  projectId: "signal-clone-70d43",
  storageBucket: "signal-clone-70d43.appspot.com",
  messagingSenderId: "458865411999",
  appId: "1:458865411999:web:a3e1305ae79a9242845faa"
};

let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
