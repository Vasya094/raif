import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  blogWrap: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  cardGrid: {
    height: "70vh",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(14),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
      height: "min-content",
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pageSection: {
    marginBottom: theme.spacing(15),
  },
}))

export default useStyles
