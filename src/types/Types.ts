import { User, UserCredential } from "firebase/auth";
import { ReactNode } from "react";
export interface IService {
  _id: string;
  image: string;
  serviceName: string;
  description: string;
  providerImage: string;
  providerName?: string;
  providerEmail: string;
  tourArea: string;
  price: number;
  status?: string;
}

export interface IServiceProps {
  service: IService;
}

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

export interface IAuthProviderProps {
  children: ReactNode;
}
