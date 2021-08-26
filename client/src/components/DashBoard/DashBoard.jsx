import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router-dom";

const DashBoard = () => {
  const [user] = useContext(UserContext);

  return user === undefined ? (
    <Redirect to="/signin" />
  ) : (
    <div>Authorize Main</div>

    // Main Application Goes here
  );
};

export default DashBoard;
