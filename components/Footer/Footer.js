import React from "react"
import PropTypes from "prop-types"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { useTheme } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { useTranslation } from "next-i18next"
import logoBlue from "~/public/images/blue_hs.png"
import logoOrange from "~/public/images/Logo__HS_orange.png"
import brand from "~/public/text/brand"
import SelectLang from "../LangSwitch/Select"
import { useTextAlign } from "~/theme/common"
import useStyles from "./footer-style"

function Copyright() {
  return (
    <Typography variant='body2' display='block' color='textSecondary'>
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  )
}

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
    link: ["#team", "#history", "#contact-us", "#locations"],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
    link: [
      "#resource",
      "#resource-name",
      "#another-resource",
      "#final-resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    link: ["#privacy-policy", "#terms-of-use"],
  },
]

function Footer(props) {
  const { toggleDir } = props
  // Theme breakpoints
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Translation Function
  const { t } = useTranslation("common")

  const classes = useStyles()
  const align = useTextAlign()

  return (
    <Container maxWidth='lg' component='footer' className={classes.footer}>
      <Grid
        direction='row'
        justifyContent='space-between'
        container
        className='ccc'
        spacing={4}
      >
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img
              src={theme.palette.type === "dark" ? logoOrange : logoBlue}
              alt='logo'
            />
            <Typography variant='h6' color='textPrimary'>
              {brand.starter.projectName}
            </Typography>
          </div>
          {isDesktop && <Copyright />}
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton
              aria-label='Delete'
              className={classes.margin}
              size='small'
            >
              <i className='ion-logo-facebook' />
            </IconButton>
            <IconButton
              aria-label='Delete'
              className={classes.margin}
              size='small'
            >
              <i className='ion-logo-twitter' />
            </IconButton>
            <IconButton
              aria-label='Delete'
              className={classes.margin}
              size='small'
            >
              <i className='ion-logo-instagram' />
            </IconButton>
            <IconButton
              aria-label='Delete'
              className={classes.margin}
              size='small'
            >
              <i className='ion-logo-linkedin' />
            </IconButton>
          </div>
          <SelectLang toggleDir={toggleDir} />
        </Grid>
      </Grid>
      {isMobile && (
        <div className={align.textCenter}>
          <Box p={4}>
            <Copyright />
          </Box>
        </div>
      )}
    </Container>
  )
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
}

Footer.defaultProps = {
  toggleDir: () => {},
}

export default Footer
