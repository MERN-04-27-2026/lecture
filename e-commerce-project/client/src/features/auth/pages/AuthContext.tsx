import React, { createContext, useState, type ReactNode } from "react";

interface User {}

export interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// store the token in localStorage
// if you refresh the page, retrieve the token from localStorage
// if you have token, it means you're logged in

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    // fetch the api from dummyJson auth login
    // api is going to return a user object, with an access token
    // store token in it
  };

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}
