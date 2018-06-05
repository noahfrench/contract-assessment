import firebase from "firebase";

const API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  apiKey: API_KEY,
  authDomain: "contract-assessment.firebaseapp.com",
  databaseURL: "https://contract-assessment.firebaseio.com",
  projectId: "contract-assessment",
  storageBucket: "contract-assessment.appspot.com",
  messagingSenderId: "830038260808"
};
firebase.initializeApp(config);
export default firebase;
