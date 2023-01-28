import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import useStyles from "./for-agricultural-holdings-style"
import AOS from "aos"
import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"

function ForAgriculturalHoldings() {
  const { t } = useTranslation("common")
  const classes = useStyles()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div id='for_agricultural_holdings' className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.textsCon}>
          <div className={classes.benefHeadOne}>{t("benefits_agroholdings")}</div>
          <div id='main_staff_header' className={classes.longText}>
            {t("benefits_agroholdings_text")}
          </div>
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
              <Tippy
                followCursor={true}
                arrow={false}
                plugins={[followCursor]}
                className={classes.reactTooltip}
                content={
                  <span className={classes.reactTooltipComponent}>
                    {t("work_without_downtime")}
                  </span>
                }
              >
                <img
                  id='first-circle'
                  className={classes.imgDiv}
                  src='/images/myasnik.jpeg'
                  alt='loading'
                />
              </Tippy>
            </div>
            <div
              data-aos-duration='1000'
              data-aos='zoom-in'
              data-aos-anchor='.card_animation'
              data-aos-anchor-placement='top-bottom'
              className={classes.testDiv}
            >
              <Tippy
                followCursor={true}
                arrow={false}
                plugins={[followCursor]}
                className={classes.reactTooltip}
                content={
                  <span className={classes.reactTooltipComponent}>
                    {t("reducing_burden_accounting_department")}
                  </span>
                }
              >
                <img
                  id='second-circle"'
                  className={classes.imgDiv}
                  src='/images/bugalter_table.jpeg'
                  alt='loading'
                />
              </Tippy>
            </div>
            <div
              data-aos-duration='1000'
              data-aos='zoom-in'
              data-aos-anchor='.card_animation'
              data-aos-anchor-placement='top-bottom'
              className={classes.testDiv}
            >
              <Tippy
                followCursor={true}
                arrow={false}
                plugins={[followCursor]}
                className={classes.reactTooltip}
                content={
                  <span className={classes.reactTooltipComponent}>
                    {t("issues_registration_relations_between_our_company")}
                  </span>
                }
              >
                <img
                  id='third-circle'
                  className={classes.imgDiv}
                  src='/images/halyal.jpeg'
                  alt='loading'
                />
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForAgriculturalHoldings
