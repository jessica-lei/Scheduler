import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7sNvU0ZIBOiJP_oQMpCPMA_UT7JQ5j4A",
  authDomain: "scheduler-80ace.firebaseapp.com",
  databaseURL: "https://scheduler-80ace-default-rtdb.firebaseio.com",
  projectId: "scheduler-80ace",
  storageBucket: "scheduler-80ace.appspot.com",
  messagingSenderId: "705402364210",
  appId: "1:705402364210:web:dbc553b6c0c6306d75b72b",
  measurementId: "G-P86GYPC0EK"
};

firebase.initializeApp(firebaseConfig);

export { firebase };