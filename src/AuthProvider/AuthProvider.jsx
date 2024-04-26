import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Register
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google
  const google = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //gitHub
  const github = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Logout
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cUser) => {
      if (cUser) {
        setUsers(cUser);
        setLoader(false);
      } else {
        setUsers(null);
        setLoader(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    users,
    loader,
    registerUser,
    loginUser,
    logOut,
    google,
    github,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
