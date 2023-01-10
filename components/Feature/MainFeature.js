import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DeckIcon from '@material-ui/icons/Deck';
import StarIcon from '@material-ui/icons/Star';
import { useTranslation } from 'react-i18next';
import useStyles from './feature-style';

function MainFeature() {
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <div className={classes.pageSection}>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <Typography variant="h4">
              {t('profitable')}
            </Typography>
            <MonetizationOnIcon className={classes.icon} />
            <Typography variant="body1">
              {t('profit_short_text')}
            </Typography>
          </div>
        </Grid>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <Typography variant="h4">
              {t('conveniently')}
            </Typography>
            <DeckIcon className={classes.icon} />
            <Typography variant="body1">
              {t('conveniently_short_text')}
            </Typography>
          </div>
        </Grid>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <Typography variant="h4">
              {t('exclusive')}
            </Typography>
            <StarIcon className={classes.icon} />
            <Typography variant="body1">
              {t('exclusive_short_text')}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
