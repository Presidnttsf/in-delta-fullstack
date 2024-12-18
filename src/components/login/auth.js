import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const useIsAuthenticated = () => {
  // const user = localStorage.getItem("user") when using local storage
  const user = useContext(UserContext);

  return !!user;
}