import React, { useContext } from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { UserContext } from "../../UserContext";

const Navbar = () => {
  const [user] = useContext(UserContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} color="primary">
        <Toolbar>
          <Typography variant="h4" className={classes.font}>
            Application
          </Typography>
        </Toolbar>
        {user !== undefined ? (
          <Logout className={classes.right}></Logout>
        ) : (
          <span className={classes.right}>
            <Button component={Link} to="/signin" color="inherit">
              Sign In
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
          </span>
        )}
      </AppBar>
    </div>
  );
};

export default Navbar;
