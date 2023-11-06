import { createContext, useEffect, useState, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// typeset
export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logOut: () => void;
  setLoading: (loading: boolean) => void;
  name: string | undefined | null;
  setName: (name: string | undefined | null) => void;
  photo: string | undefined | null;
  setPhoto: (photo: string | undefined | null) => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | undefined | null>("");
  const [photo, setPhoto] = useState<string | undefined | null>("");
  const [loading, setLoading] = useState(true);

  console.log(user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setName(currentUser?.displayName);
      setPhoto(currentUser?.photoURL);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

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
    signOut(auth);
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
