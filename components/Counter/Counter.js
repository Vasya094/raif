import React, { useState } from "react"
import CountUp from "react-countup"
import ScrollAnimation from "react-scroll-animation-wrapper"
import Typography from "@material-ui/core/Typography"
// import BusinessCenterSharp from "@material-ui/core/BusinessCenterSharp"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import useStyles from "./counter-style"
import { useTranslation } from "react-i18next"

function Counter() {
  const classes = useStyles()
  const { t } = useTranslation("common")
  const [play, setPlay] = useState(false)

  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  )

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true)
      }, 500)
    }
  }

  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          className={classes.root}
          spacing={6}
        >
          <Grid md={4} item>
            <ScrollAnimation
              animateOnce
              animateIn='fadeIn'
              offset={1500}
              afterAnimatedIn={handlePlay}
            >
              <div className={classes.counterItem}>
                <i className='icon ion-ios-calendar-outline' />
                <div className={classes.text}>
                  <Typography variant='h4'>{countup(11, play)}</Typography>
                  <Typography variant='h6'>
                    {t("more_years_experience_range_services")}
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <i className='icon ion-ios-speedometer-outline' />
              <div className={classes.text}>
                <Typography variant='h4'>{countup(12000, play)}</Typography>
                <Typography variant='h6'>
                  {t("speed_slaughter_per_hour")}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <i className='icon ion-ios-cash-outline' />
              <div className={classes.text}>
                <Typography variant='h4'>{countup(35, play)}</Typography>
                <Typography variant='h6'>
                  {t("investments_halal_slaughter")}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Counter
