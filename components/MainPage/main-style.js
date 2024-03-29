import { makeStyles } from "@material-ui/core/styles"

const mainStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  textContainer: {
    padding: "12px",
    marginBottom: "6rem",
    position: "relative",
    marginTop: "0",
    display: "flex",
    alignItems: "center",
    transform: "translateY(-50%)",
    top: "50%",
    height: "100vh",
    backgroundColor: theme.palette.action.half,
    [theme.breakpoints.down("xs")]: {
      textAlign: "right",
      justifyContent: "center",
    },
  },
  "@keyframes dropIn": {
    from: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
    to: {
      opacity: 1,
      transform: "translate(0px)",
    },
  },
  halalHeader: {
    fontSamily: "Inter",
    fontStyle: "normal",
    fontWeight: "900",
    marginTop: "0",
    marginBottom: "0",
    fontSize: "64px",
    lineHeight: "132.02%",
    color: "#F57B20",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    animation: "$dropIn 800ms ease 200ms backwards",
  },
  staffHeader: {
    fontFamily: "Roboto",
    marginTop: "0",
    marginBottom: "0",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "210px",
    lineHeight: "250px",
    [theme.breakpoints.down("md")]: {
      fontSize: "150px",
      lineHeight: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "100px",
      lineHeight: "100px",
    },
    color: "#FFFFFF",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    animation: "$dropIn 1000ms ease 200ms backwards",
  },
  textP: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "156.52%",
    letterSpacing: "0.115rem",
    color: "#FFFFFF",
  },
  overflowHidden: {
    overflow: "hidden",
  },
  moreBtn: {
    display: "flex",
    width: "8rem",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-around",
    cursor: "pointer",
    borderRadius: "12px",
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "#F57B20",
      color: "white",
    },
    "& span": {
      height: "22px",
      margin: "8px",
      fontSize: "16px",
      color: "white",
    },
  },
  ancor: {
    textDecoration: "none",
  },
  imgFull: {},
  videoBg: {
    objectFit: "cover",
    width: "100vw",
    position: "absolute",
    height: "100vh",
    top: "0",
    left: "0",
    [theme.breakpoints.down("xs")]: {
      right: "50%",
      left: "unset",
      width: "166vw",
    },
  },
}))

export default mainStyles
