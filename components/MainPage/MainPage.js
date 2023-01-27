import { useRouter } from "next/router"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useTranslation } from "react-i18next"
import useStyles from "./main-style"

function MainPage() {
  const { t } = useTranslation("common")
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <video autoPlay loop playsInline muted className={classes.videoBg}>
        <source src='/images/bg_video.mp4' type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
      <div className={classes.textContainer}>
        <div>
          <div className={classes.overflowHidden}>
            <h1 className={classes.halalHeader}>Halal</h1>
          </div>
          <div id='main_staff_header' className={classes.overflowHidden}>
            <h3 className={classes.staffHeader}>Staff</h3>
          </div>
          <p id='main_text' className={classes.textP}>
            {t("first_page_long_text")}
          </p>
          <div className={classes.moreBtn}>
            <AnchorLink className={classes.ancor} href='#about_us'>
              <span>{t("read_more")}...</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
