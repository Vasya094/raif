import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './main-style';

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
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLangRu = router.query.locale === 'ru';
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.overflowHidden}>
          <h1 className={classes.halalHeader}>{t('halal')}</h1>
        </div>
        <div className={classes.overflowHidden}>
          <h3 style={{ letterSpacing: currentLangRu ? '-10px' : '0' }} className={classes.staffHeader}>{t('staff')}</h3>
        </div>
        <p id="main_text" className={classes.textP}>{t('first_page_long_text')}</p>
      </div>
    </div>
  );
}

export default MainPage;
