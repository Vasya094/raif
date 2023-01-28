import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import useStyles from "./pricing-style"
import { useTranslation } from "react-i18next"

const tiers = [
  {
    title: "EXPRESS",
    description: [
      "mobile_brigade",
      "departure_factory",
      "short_term_audits_seasonal",
    ],
  },
  {
    title: "STANDART",
    description: [
      "crew_two_people",
      "slaughter_services_shift",
      "attached_permanent_basis",
    ],
  },
  {
    title: "EXCLUSIVE",
    description: [
      "around_performing_slaughter",
      "work_rotational_basis",
      "slaughter_chickens_hour",
    ],
  },
]

export default function Pricing() {
  const { t } = useTranslation("common")
  const classes = useStyles()

  return (
    <Container maxWidth='md' component='main'>
      <Typography gutterBottom variant='h3' align='center' display='block'>
        {t("service_packages")}
      </Typography>
      <Typography gutterBottom variant='body1' align='center' display='block'>
        {t("individual_client_price_plan")}
      </Typography>
      <div className={classes.pricingWrap}>
        <Grid
          justifyContent='space-around'
          container
          spacing={5}
          alignItems='flex-end'
        >
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card className={classes.priceCard}>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component='li'
                        variant='subtitle1'
                        align='left'
                        key={line}
                      >
                        {t(line)}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}
