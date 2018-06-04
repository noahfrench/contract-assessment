import firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCQwgklbvVL3ah3x3aMzwxLDWfS9t-C8Fc",
  authDomain: "contract-assessment.firebaseapp.com",
  databaseURL: "https://contract-assessment.firebaseio.com",
  projectId: "contract-assessment",
  storageBucket: "contract-assessment.appspot.com",
  messagingSenderId: "830038260808"
};
firebase.initializeApp(config);
export default firebase;
