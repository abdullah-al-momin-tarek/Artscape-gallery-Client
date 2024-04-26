import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyDs42e3Krh7L_bR_yMDsRRofXknT1M_x6k",
  authDomain: "artscape-gallery.firebaseapp.com",
  projectId: "artscape-gallery",
  storageBucket: "artscape-gallery.appspot.com",
  messagingSenderId: "328981074212",
  appId: "1:328981074212:web:10f0e9804afb0a3b1be3b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
