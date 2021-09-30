import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCAw3yXjcam7HJaS0ThALIMoZ_ICUR9V1k',

  authDomain: 'insta-536de.firebaseapp.com',

  projectId: 'insta-536de',

  storageBucket: 'insta-536de.appspot.com',

  messagingSenderId: '859496964055',

  appId: '1:859496964055:web:8a1ddf6dc33cbef83a3592',

  measurementId: 'G-SVXSQ39P6L'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
