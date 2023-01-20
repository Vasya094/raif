import React from 'react';
import Button from '@material-ui/core/Button';
import Slider from 'react-animated-slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import useStyles from './slider-style';
import imgAPI from '~/public/images/imgAPI';

const content = [
  {
    title: 'title',
    button: 'Read More',
    image: imgAPI.photo[0],
    user: 'Luanda Gjokaj',
    userProfile: imgAPI.avatar[2],
  },
  {
    title: 'title',
    button: 'Discover',
    image: imgAPI.photo[0],
    user: 'Erich Behrens',
    userProfile: imgAPI.avatar[7],
  },
  {
    title: 'title',
    button: 'Buy now',
    image: imgAPI.photo[0],
    user: 'Bruno Vizovskyy',
    userProfile: imgAPI.avatar[8],
  }
];

function AnimateSlider() {
  const classes = useStyles();
  const { t } = useTranslation('common');
  return (
    <div id="bbb" className={classes.heroContent}>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index.toString()}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <Typography variant="h1">{t(item.title)}</Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by&nbsp;
                <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AnimateSlider;
