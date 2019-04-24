
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-1w0ZvDOkZgvaQaAahU6feSIn8vgpWCk",
  authDomain: "authentication-4056d.firebaseapp.com",
  databaseURL: "https://authentication-4056d.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
