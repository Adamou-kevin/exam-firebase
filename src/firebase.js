import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyDe_QuacriNuHaqoKaLMGpjgx20Hua1CHo",
  authDomain: "exam-firebase-f56dd.firebaseapp.com",
  databaseURL: "https://exam-firebase-f56dd-default-rtdb.firebaseio.com",
  projectId: "exam-firebase-f56dd",
  storageBucket: "exam-firebase-f56dd.appspot.com",
  messagingSenderId: "906738657724",
  appId: "1:906738657724:web:fdd7d92fbf66ece9bca3b9",
  measurementId: "G-BHGQJ3VSQP"
  };

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);
const auth = getAuth(app)

export { fireDb };