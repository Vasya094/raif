import React, { useEffect } from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import clsx from "clsx"
import Head from "next/head"
import Hidden from "@material-ui/core/Hidden"
import Container from "@material-ui/core/Container"
import "aos/dist/aos.css"
import "tippy.js/dist/tippy.css"
import { useTranslation } from "react-i18next"
import { getStaticPaths, makeStaticProps } from "~/lib/getStatic"
import Header from "~/components/Header"
import Feature from "~/components/Feature"
import Counter from "~/components/Counter"
import Pricing from "~/components/Pricing"
import Certificate from "~/components/Certificate"
import Subscribe from "~/components/Subscribe"
import Footer from "~/components/Footer"
import PageNav from "~/components/PageNav"
import useStyles from "../../theme/indexPage"
import MainPage from "../../components/MainPage"
import ForAgriculturalHoldings from "../../components/ForAgriculturalHoldings/ForAgriculturalHoldings"

function Landing(props) {
  const classes = useStyles()
  const { t } = useTranslation("common")
  const { onToggleDark, onToggleDir } = props
  useEffect(() => {
    return () => {
      window.history.replaceState(null, null, window.location.pathname)
    }
  })
  return (
    <React.Fragment>
      <Head>
        <title>{t("halal_staff")}</title>
      </Head>
      <CssBaseline />
      <section id='home' />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <main className={classes.containerWrap}>
          <section id='main' className={classes.firstMain}>
            <MainPage />
          </section>
          <section
            className={clsx(classes.spaceTop, classes.spaceBottom)}
            id='about_us'
          >
            <Container fixed>
              <Feature />
            </Container>
          </section>
          <section>
            <ForAgriculturalHoldings />
          </section>
          <section className={classes.pageSection}>
            <Counter />
          </section>
          <section className={classes.spaceTop} id='pricing'>
            <Pricing />
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottomShort)}>
            <Certificate />
          </section>
          <section
            id='contacts'
            className={clsx(classes.spaceTop, classes.spaceBottom)}
          >
            <Subscribe />
          </section>
        </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
      </div>
    </React.Fragment>
  )
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
}

export default Landing

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(["common"])
export { getStaticPaths, getStaticProps }
