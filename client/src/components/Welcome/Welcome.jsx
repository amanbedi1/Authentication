import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import useStyles from "./style";

const Welcome = () => {
  const [user] = useContext(UserContext);

  const classes = useStyles();

  return user !== undefined ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        Welcome
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        color="textSecondary"
        className={classes.content}
      >
        Please SignIn or SignUp to start using Application
      </Typography>
    </div>
  );
};

export default Welcome;
