import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
  },
  appbar: {
    backgroundColor: "#212529",
    margin: "20px 0",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    justifySelf: "center",
  },
  font: {
    [theme.breakpoints.down("500")]: {
      fontSize: "25px",
    },
  },
  right: {
    margin: "15px",
  },
}));

export default useStyles;
