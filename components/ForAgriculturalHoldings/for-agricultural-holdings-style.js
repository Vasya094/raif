import { makeStyles } from "@material-ui/core/styles"
import bg from "../../public/images/BG.png"

const ForAgriculturalHoldingsStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    height: "100vh",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "&:after": {
      content: "",
      backgroundAttachment: "scroll",
      position: "fixed" /* stretch a fixed position to the whole screen */,
      top: "0",
      height:
        "100vh" /* fix for mobile browser address bar appearing disappearing */,
      left: "0",
      right: "0",
      zIndex: "-1",
      background: `url(${bg}) no-repeat center center fixed`,
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      backgroundSize: "cover",
    },
  },
  textContainer: {
    padding: "12px",
    position: "relative",
    marginTop: "0",
    transform: "translateY(-44%)",
    top: "50%",
    height: "90%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "unset",
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
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "44vw",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      width: "100%",
      marginTop: "3rem",
    },
    justifyContent: "space-around",

    "& :nth-child(1)": {
      alignSelf: "end",
    },
    "& :nth-child(2)": {
      alignSelf: "center",
    },
    "& :nth-child(3)": {
      alignSelf: "start",
    },
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  testDiv: {
    margin: "8px",
  },
  benefHeadOne: {
    fontSize: "3.5rem",
    fontWeight: "500",
    marginTop: "6px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "2.5rem",
    },
  },
  longText: {
    marginTop: "2.5rem",
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
      fontSize: "20px",
    },
  },
  reactTooltip: {
    backgroundColor: theme.palette.type === "dark" ? "white" : "gray",
  },
  reactTooltipComponent: {
    fontSize: "19px",
    color: theme.palette.type !== "dark" ? "white" : "black",
  },
  textsCon: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "3rem",
      width: "50vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  imgDiv: {
    cursor: "pointer",
    height: "11rem",
    width: "11rem",
    [theme.breakpoints.down("sm")]: {
      height: "7rem",
      width: "7rem",
      border: "2px solid",
      borderColor: theme.palette.text.primary,
    },
    border: "5px solid",
    borderColor: theme.palette.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "10rem",
  },
}))

export default ForAgriculturalHoldingsStyles
