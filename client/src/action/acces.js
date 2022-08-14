import { createContext } from "react";

export const UserContext = createContext(null);

export function getkey() {
  return localStorage.getItem("key");
}
