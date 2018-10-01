import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBg0WKOR_APHpFKKeuNc8r4CRBbfMlApeg",
  authDomain: "marioplan-24018.firebaseapp.com",
  databaseURL: "https://marioplan-24018.firebaseio.com",
  projectId: "marioplan-24018",
  storageBucket: "",
  messagingSenderId: "888875857137"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
