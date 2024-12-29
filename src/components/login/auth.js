import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const useIsAuthenticated = () => {
  // const user = localStorage.getItem("user") when using local storage
  const user = useContext(UserContext);

  // console.log("userfrom auth", user)
  return !!user.token;
}


// !!user.token