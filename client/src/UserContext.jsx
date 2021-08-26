import React, { createContext, useEffect, useState } from "react";

import decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const getUser = () => {
    const token = localStorage.getItem("userToken");

    let userInfo = undefined;

    if (token) {
      const decodedJwt = decode(token);

      if (decodedJwt.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("userToken");
      } else {
        userInfo = {
          username: decodedJwt.username,
        };
      }
    }
    return userInfo;
  };

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, []);

  const addToken = (token) => {
    localStorage.setItem("userToken", token);

    const data = getUser();

    setUser(data);
  };

  const removeToken = () => {
    localStorage.removeItem("userToken");
    setUser(undefined);
  };

  const data = [user, addToken, removeToken];

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
