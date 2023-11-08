import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { AuthContextProps, IAuthProviderProps } from "../types/Types";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext<AuthContextProps | null>(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | undefined | null>("");
  const [photo, setPhoto] = useState<string | undefined | null>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setName(currentUser?.displayName);
      setPhoto(currentUser?.photoURL);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axiosSecure.post("/jwt", loggedUser).then((res) => {
          console.log(res.data);
        });
      } else {
        axiosSecure.post("/logout", loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setName("");
    setPhoto("");
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logOut,
    setLoading,
    name,
    setName,
    photo,
    setPhoto,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
