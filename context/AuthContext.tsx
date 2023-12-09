import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { User } from "../types/user.types";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

type AuthContextType = {
  user: User | null;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [cookies, setCookies] = useCookies(["token"]);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const jwtToken = cookies.token;

    if (jwtToken) {
      const decodedToken = jwt.decode(jwtToken);
      setUser(decodedToken as User);
    }
  }, [cookies.token]);

  const signOut = () => {
    router.push("/");
    setUser(null);
    setCookies("token", "", { path: "/" });
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
