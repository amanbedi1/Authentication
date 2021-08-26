import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signin } from "../../Api/api";
import { Redirect } from "react-router-dom";
import useStyles from "./style";

const initialUserInformation = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [userInformation, setUserInformation] = useState(
    initialUserInformation
  );
  const [Error, setError] = useState("");

  const [user, addToken] = useContext(UserContext);

  const handleChange = (e) => { 
    
    const { name, value } = e.target;

    setUserInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signin(userInformation)
      .then((data) => { 
        if(!data){  
          setError("Bad Request Please try again"); 
          setUserInformation(initialUserInformation);

          return;
        }
        setError("");
        setUserInformation(initialUserInformation);
        addToken(data.token);
      })
      .catch((err) => setError(err));
  };

  const classes = useStyles();

  return user !== undefined ? (
    <Redirect to="/dashboard" />
  ) : (
    <Paper
      variant="elevation"
      elevation={5}
      component="main"
      className={classes.container}
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            className={classes.input}
            value={userInformation.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            className={classes.input}
            value={userInformation.password}
            onChange={handleChange}
          />
          <Typography variant="h6" align="left" color="secondary">
            {Error}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default SignIn;
