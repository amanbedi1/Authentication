import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "45%",
    margin: "auto",

    [theme.breakpoints.down("500")]: {
      width: "95%",
    },
  },
  paper: {
    margin: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("500")]: {
      margin: "20px",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  input: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("500")]: {
      marginTop: theme.spacing(2),
    },
  },
  submit: {
    margin: theme.spacing(4, 0, 4),
    [theme.breakpoints.down("500")]: {
      margin: theme.spacing(2, 0, 2),
    },
  },
}));

export default useStyles;
