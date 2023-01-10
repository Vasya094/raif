import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'react-i18next';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';

function MainFeature() {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const align = useTextAlign();
  return (
    <div className={clsx(classes.featureMore)}>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                {t('high_professionalism')}
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                {t('high_professionalism_text')}
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src="/images/staff_3_copy.jpg" alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.secondImgText} spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src="/images/bangs.jpeg" alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="fadeInRight" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                {t('opportunities_and_prospects')}
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                {t('opportunities_and_prospects_text')}
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={clsx(align.textCenter, classes.featureItem, classes.last)}>
              <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.6}>
                <Typography variant="h3" className={classes.title}>
                  {t('streamlined_workflow')}
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={300} duration={0.6}>
                <Typography variant="body1" className={classes.text}>
                  {t('streamlined_workflow_text')}
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
                <div className={classes.deco2} />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={500} duration={0.6}>
                <figure className={classes.imgFull}>
                  <img src="/images/back_chiken.jpeg" alt="img" />
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
