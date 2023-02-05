import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import { useTranslation } from "next-i18next"
import logoBlue from "~/public/images/blue_hs.png"
import logoOrange from "~/public/images/Logo__HS_orange.png"
import brand from "~/public/text/brand"
import SelectLang from "../LangSwitch/Select"
import { useTextAlign } from "~/theme/common"
import useStyles from "./footer-style"
import Place from "@material-ui/icons/Place"
import Phone from "@material-ui/icons/Phone"
import Email from "@material-ui/icons/Email"

function Copyright() {
  return (
    <Typography variant='body2' display='block' color='textSecondary'>
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  )
}

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
    <footer className={classes.footer}>
      <Grid
        className={classes.footerBody}
        direction='row'
        justifyContent='space-between'
        container
        spacing={4}
      >
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
          <div className={classes.socmed}>
            <div className={classes.icoCon}>
              <span>
                <Place className={classes.conIcon} />{" "}
              </span>
              <span className={classes.conText}> {t("samara_stankozavodskaya")}</span>
            </div>
            <div className={classes.icoCon}>
              <span>
                <Phone className={classes.conIcon} />{" "}
              </span>
              <span className={classes.conText}> 8 800 700 63 07</span>
            </div>
            <div className={classes.icoCon}>
              <span>
                <Email className={classes.conIcon} />{" "}
              </span>
              <span className={classes.conText}> info@amargroup.ru</span>
            </div>
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
    </footer>
  )
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
}

Footer.defaultProps = {
  toggleDir: () => {},
}

export default Footer
