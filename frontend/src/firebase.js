import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAorvKaizL2zBl-M7w2nyJ9coefHxEba5o",
//   authDomain: "mekele-b1e9d.firebaseapp.com",
//   databaseURL: "https://mekele-b1e9d.firebaseio.com",
//   projectId: "mekele-b1e9d",
//   storageBucket: "mekele-b1e9d.appspot.com",
//   messagingSenderId: "983960204737",
//   appId: "1:983960204737:web:7a028a6a14a1ee43b8eb40",
//   measurementId: "G-MCSVQQ2MF0",
// }
const firebaseConfig = {
  apiKey: "AIzaSyBSN5u6GVnRMdNumbQ6MZHPg5LtzXQzRkA",
  authDomain: "mekele-77f49.firebaseapp.com",
  databaseURL: "https://mekele-77f49.firebaseio.com",
  projectId: "mekele-77f49",
  storageBucket: "mekele-77f49.appspot.com",
  messagingSenderId: "311057503081",
  appId: "1:311057503081:web:c25b11c6c73f32680723f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
