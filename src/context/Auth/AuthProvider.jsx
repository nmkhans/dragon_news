import React, { useEffect } from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  async function createUser(data) {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.photoUrl,
      });

      toast.success("Registration successful.");
      setLoading(false);
    } catch (e) {
      toast.error(e.toString());
      setLoading(false);
    }
  }

  async function loginUser(data) {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      toast.success("Login successful.");
      setLoading(false);
    } catch (e) {
      toast.error(e.toString());
      setLoading(false);
    }
  }

  async function logOut() {
    await signOut(auth);
    toast.warning("Logout successful.");
  }

  const context = { user, loading, createUser, loginUser, logOut };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
