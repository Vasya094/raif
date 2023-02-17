import { useState, useEffect } from "react"
import Head from "next/head"
import App from "next/app"
import PropTypes from "prop-types"
import {
  ThemeProvider,
  createTheme,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles"
import { create } from "jss"
import { PageTransition } from "next-page-transitions"
import rtl from "jss-rtl"
import CssBaseline from "@material-ui/core/CssBaseline"
import { appWithTranslation } from "next-i18next"
import lngDetector from "../lib/languageDetector"
import appTheme from "../theme/appTheme"
/* import css vendors */
import "~/vendors/hamburger-menu.css"
import "~/vendors/animate-slider.css"
import "animate.css/animate.css"
import "../vendors/animate-extends.css"
import "../vendors/page-transition.css"
import "../vendors/slick/slick.css"
import "../vendors/slick/slick-theme.css"

let themeType = "light"
if (typeof Storage !== "undefined") {
  // eslint-disable-line
  themeType = localStorage.getItem("colorTheme") || "light"
}

function MyApp(props) {
  const { Component, pageProps, router } = props
  const curLang = lngDetector.detect()
  const [theme, setTheme] = useState({
    ...appTheme("burgundy", themeType),
    direction: curLang === "ar" ? "rtl" : "ltr",
  })

  useEffect(() => {
    const preloader = document.getElementById("preloader")
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove()
      }, 2000)
    }
  }, [])

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === "light" ? "dark" : "light"
    localStorage.setItem(
      "colorTheme",
      theme.palette.type === "light" ? "dark" : "light"
    )
    themeType = newPaletteType
    setTheme({
      ...appTheme("burgundy", newPaletteType),
      direction: theme.direction,
    })
  }

  const toggleDirection = (dir) => {
    document.dir = dir
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette,
      },
    })
  }

  const muiTheme = createTheme(theme)
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <div id='main-wrap'>
            <PageTransition timeout={300} classNames='page-fade-transition'>
              <Component
                {...pageProps}
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
                key={router.route}
              />
            </PageTransition>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
})

export default appWithTranslation(MyApp)
