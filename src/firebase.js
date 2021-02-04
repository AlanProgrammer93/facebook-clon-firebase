import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD166FDuFZHQOAa7NbDj8WImz4P3GF6QrQ",
    authDomain: "facebook-firebase-24d9d.firebaseapp.com",
    projectId: "facebook-firebase-24d9d",
    storageBucket: "facebook-firebase-24d9d.appspot.com",
    messagingSenderId: "274083901440",
    appId: "1:274083901440:web:4f2c5c5b79f88bc76328e5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, storage };
  export default db;
  