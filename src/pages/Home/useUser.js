import { useState } from "react";

export default function useUser() {
  const getUser = () => {
    const userString = sessionStorage.getItem("username");
    return userString;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user) => {
    sessionStorage.setItem("username", user);
    setUser(user);
  };

  return {
    setUser: saveUser,
    user,
  };
}
