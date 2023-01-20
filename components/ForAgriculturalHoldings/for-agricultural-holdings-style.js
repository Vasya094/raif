import { makeStyles } from "@material-ui/core/styles"

const ForAgriculturalHoldingsStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
    background:
      "linear-gradient(0deg, rgba(245,123,32,1) 0%, rgba(25,101,176,1) 51%, rgba(255,255,255,1) 100%)",
  },
  textContainer: {
    padding: "12px",
    marginBottom: "6rem",
    position: "relative",
    marginTop: "0",
    transform: "translateY(-44%)",
    top: "50%",
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
    justifyContent: "space-around",
  },
  testDiv: {},
  imgDiv: {
    cursor: "pointer",
    height: "13rem",
    width: "13rem",
    border: "5px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "10rem",
  },
}))

export default ForAgriculturalHoldingsStyles
