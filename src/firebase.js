import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBiZm1yWUQqvDYjH-CLwWSqT-r5bNTIv8",
    authDomain: "whatsapp-clone-971ab.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-971ab.firebaseio.com",
    projectId: "whatsapp-clone-971ab",
    storageBucket: "whatsapp-clone-971ab.appspot.com",
    messagingSenderId: "4405421351",
    appId: "1:4405421351:web:6e53a2385ae0d1abe57502",
    measurementId: "G-356412ZLHK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;