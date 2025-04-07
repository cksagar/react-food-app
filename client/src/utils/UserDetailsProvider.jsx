import { useState } from "react";
import { UserDetailsContext } from "./UserDetailsContext";

export const UserDetailsProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserDetailsContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserDetailsContext.Provider>
  );
};
