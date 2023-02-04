import { makeStyles } from "@material-ui/core/styles"

const subscribeStyles = makeStyles((theme) => ({
  subscribeWrap: {
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto -32px",
    },
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      // marginTop: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "1rem",
    },
    zIndex: 10,
    position: "relative",
  },
  paper: {
    padding: theme.spacing(4),
    width: "70vw",
    maxWidth: "55rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  secCol: {
    marginTop: "3rem !important",
    [theme.breakpoints.down("md")]: {
      marginTop: "0 !important",
    },
  },
  twoColsCont: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

    "& > *": {
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  col: {
    margin: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
  },
  rightIcon: {
    marginLeft: theme.spacing(),
  },
  optionsInput: {
    width: "100%",
    marginTop: "10px",
  },
}))

export default subscribeStyles
