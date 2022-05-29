import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCLuzOenDECWdwUNyr6L1dIM_D118W1XYQ",
  authDomain: "project-cpm-47e89.firebaseapp.com",
  databaseURL: "https://project-cpm-47e89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-cpm-47e89",
  storageBucket: "project-cpm-47e89.appspot.com",
  messagingSenderId: "220386947170",
  appId: "1:220386947170:web:e8b7da4c1d65e240fba13b",
  measurementId: "G-HJK7VZDF3H"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}