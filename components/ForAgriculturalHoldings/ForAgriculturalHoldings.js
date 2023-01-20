import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import useStyles from "./for-agricultural-holdings-style"
import AOS from "aos"
import "aos/dist/aos.css"
import TooltipToCircle from "./TooltipToCircle"
import { Popover, Typography } from "@material-ui/core"

function ForAgriculturalHoldings() {
  const { t } = useTranslation("common")
  const classes = useStyles()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div id='for_agricultural_holdings' className={classes.container}>
      <div className={classes.textContainer}>
        <div>
          <h1>{t("benefits_agroholdings")}</h1>
        </div>
        <div className={classes.overflowHidden}>
          <span className='card_animation'></span>
          <div className={classes.cardsContainer}>
            <div
              className={classes.testDiv}
              data-aos-anchor='.card_animation'
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-anchor-placement='top-bottom'
            >
              <TooltipToCircle
                title={
                  <>
                    <Typography color='inherit'>
                      {t("work_without_downtime")}
                    </Typography>
                  </>
                }
              >
                <img
                  className={classes.imgDiv}
                  src='/images/myasnik.jpeg'
                  alt='loading'
                />
              </TooltipToCircle>
            </div>
            <div
              data-aos-duration='1000'
              data-aos='zoom-in'
              data-aos-anchor='.card_animation'
              data-aos-anchor-placement='top-bottom'
              className={classes.testDiv}
            >
              <TooltipToCircle
                title={
                  <>
                    <Typography color='inherit'>
                      {t("reducing_burden_accounting_department")}
                    </Typography>
                  </>
                }
              >
                <img
                  className={classes.imgDiv}
                  src='/images/bugalter_table.jpeg'
                  alt='loading'
                />
              </TooltipToCircle>
            </div>
            <div
              data-aos-duration='1000'
              data-aos='zoom-in'
              data-aos-anchor='.card_animation'
              data-aos-anchor-placement='top-bottom'
              className={classes.testDiv}
            >
              <TooltipToCircle
                title={
                  <>
                    <Typography color='inherit'>
                      {t("issues_registration_relations_between_our_company")}
                    </Typography>
                  </>
                }
              >
                <img
                  className={classes.imgDiv}
                  src='/images/halyal.jpeg'
                  alt='loading'
                />
              </TooltipToCircle>
            </div>
          </div>
        </div>
        <div id='main_staff_header' className={classes.overflowHidden}>
          text
        </div>
      </div>
    </div>
  )
}

export default ForAgriculturalHoldings
