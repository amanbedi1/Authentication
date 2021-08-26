import React from "react";
import SignIn from "./components/SignIn/SignIn";
import Navbar from "./components/Navabar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DashBoard from "./components/DashBoard/DashBoard";
import Welcome from "./components/Welcome/Welcome.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </UserProvider>
  );
};

export default App;
