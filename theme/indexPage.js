import { makeStyles } from "@material-ui/core/styles"
import bg from "../public/images/panorama_factory.jpeg"

const sectionMargin = (margin) => margin * 15
const useStyles = makeStyles((theme) => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
  },
  spaceTop: {
    paddingTop: theme.spacing(12),
  },
  containerWrap: {
    marginTop: theme.spacing(0),
  },
  firstMain: {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundColor: "#464646",
    backgroundAttachment: 'scroll',
    height: "100vh",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "&:after": {
      content: "",
      backgroundAttachment: 'scroll',
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
}))

export default useStyles
