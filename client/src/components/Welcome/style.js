import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px",
    [theme.breakpoints.down("500")]: {
      margin: "10px",
    },
  },
  

  content: {
    margin: "30px",
    [theme.breakpoints.down("500")]: {
      margin: "10px",
    },
  },
}));

export default useStyles;
