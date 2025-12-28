"use client";
import { User } from "@/types/user";
import React, { createContext } from "react";

const AuthContext = createContext<{
  user: User | null;
  isUserLoggedIn: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsUserLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  login?: (
    username: string,
    password: string,
    multiFactorAuth?: {
      ref: string;
      code: string;
    }
  ) => Promise<void>;
  logout?: () => void;
}>({
  user: null,
  isUserLoggedIn: false,
  setUser: () => {},
  setIsUserLoggedIn: () => {},
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState<boolean>(false);

  const login = async (
    username: string,
    password: string,
    multiFactorAuth?: { ref: string; code: string }
  ) => {
    // Implement login logic here
  };

  const logout = () => {
    // Implement logout logic here
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isUserLoggedIn, setIsUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
