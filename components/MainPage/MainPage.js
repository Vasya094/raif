import { useRouter } from "next/router"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useTranslation } from "react-i18next"
import useStyles from "./main-style"

// const content = [
//   {
//     title: 'title',
//     button: 'Read More',
//     image: imgAPI.photo[0],
//     user: 'Luanda Gjokaj',
//     userProfile: imgAPI.avatar[2],
//   },
//   {
//     title: 'title',
//     button: 'Discover',
//     image: imgAPI.photo[0],
//     user: 'Erich Behrens',
//     userProfile: imgAPI.avatar[7],
//   },
//   {
//     title: 'title',
//     button: 'Buy now',
//     image: imgAPI.photo[0],
//     user: 'Bruno Vizovskyy',
//     userProfile: imgAPI.avatar[8],
//   }
// ];

function MainPage() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const currentLangRu = router.query.locale === "ru"
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
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
  )
}

export default MainPage
