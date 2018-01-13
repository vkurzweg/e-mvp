import firebase from 'firebase';
// TODO: hide variables
const config = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyC-UwqD2Dge_ae63Hfhj4P9PV5gA8HuuKE",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "eventmakr-mvp.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "https://eventmakr-mvp.firebaseio.com",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "eventmakr-mvp.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID || "295641411925"
};
const fb = firebase.initializeApp(config);
const db = fb.database();
const ref = db.ref

export {
  fb,
  db,
  ref,
}
