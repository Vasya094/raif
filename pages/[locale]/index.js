import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { useTranslation } from 'react-i18next';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
// import AnimateSlider from '~/components/AnimateSlider';
import Feature from '~/components/Feature';
import Counter from '~/components/Counter';
// import Testimonials from '~/components/Testimonials';
import Pricing from '~/components/Pricing';
import Blog from '~/components/Blog';
import Subscribe from '~/components/Subscribe';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';
import useStyles from '../../theme/indexPage';
// import Notification from '~/components/Notification';
import brand from '~/public/text/brand';
import MainPage from '../../components/MainPage';

function Landing(props) {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          {t('halal_staff')}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <main className={classes.containerWrap}>
          <section id="main" className={classes.firstMain}>
            <MainPage />
          </section>
          <section
            className={clsx(classes.spaceTop, classes.spaceBottom)}
            id="about_us"
          >
            <Container fixed>
              <Feature />
            </Container>
          </section>
          <section className={classes.pageSection}>
            <Counter />
          </section>
          {/* <section className={classes.spaceTop} id="testimonials">
            <Testimonials />
          </section> */}
          <section className={classes.spaceTop} id="pricing">
            <Pricing />
          </section>
          <section
            className={clsx(classes.spaceTop, classes.spaceBottomShort)}
            id="blog"
          >
            <Blog />
          </section>
          <section className={classes.spaceBottom} id="contacts">
            <Subscribe />
          </section>
        </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        {/* <Hidden mdDown>
          <Notification />
        </Hidden> */}
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
