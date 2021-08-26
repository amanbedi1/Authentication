import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "40%",
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
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  input: {
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(4, 0, 4),
  },
}));

export default useStyles;
