import React, { useEffect, useState } from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Icon from "@material-ui/core/Icon"
import useStyles from "./subscribe-style"
import { useTranslation } from "react-i18next"
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core"
import { useForm } from "@formspree/react"
import clsx from "clsx"

let messageSentLS = false

if (typeof window !== "undefined") {
  messageSentLS = JSON.parse(localStorage.getItem("message_sent"))
}

export default function Pricing() {
  const classes = useStyles()
  const { t } = useTranslation("common")

  const [messageSent, setMessageSent] = useState(messageSentLS)
  const [values, setValues] = useState({
    companyName: "",
    adress: "",
    brend: "",
    toExport: false,
    nowWithHalal: false,
    packet: "STANDART",
    freeCer: false,
    contacts: "",
  })
  const [state, handleSubmit] = useForm("mlekgjjz", {
    data: {
      subject: "Someone joined the newsletter",
      Данные: JSON.stringify({
        "Название компании": values.companyName,
        "Работают ли с Халяль в настоящее время": values.nowWithHalal
          ? "да"
          : "нет",
        "Хотят выпускать продукцию на экспорт": values.toExport ? "да" : "нет",
        "Подходящий пакет": values.packet,
        "Хотели бы получить сертификат ХАЛЯЛЬ": values.freeCer ? "да" : "нет",
        Связь: values.contacts,
      }),
    },
  })
  if (state.succeeded) {
    localStorage.setItem("message_sent", JSON.stringify(true))
    return (
      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        {t("thank_your_time_contact_soon")}
      </p>
    )
  }

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]:
        name !== "toExport" && name !== "nowWithHalal" && name !== "freeCer"
          ? event.target.value
          : event.target.checked,
    })
  }

  return (
    <div className={classes.subscribeWrap}>
      <span id='contacts'></span>
      <Paper className={classes.paper}>
        <Typography align='center' variant='h5'>
          {t("fill_form_contact_you")}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.container}
          noValidate
          autoComplete='off'
        >
          <div className={classes.twoColsCont}>
            <div className={classes.col}>
              <div>
                <TextField
                  id='companyName'
                  label={t("full_company_name")}
                  className={classes.textField}
                  fullWidth
                  value={values.companyName}
                  onChange={handleChange("companyName")}
                  margin='normal'
                />
              </div>
              <div>
                <TextField
                  id='adress'
                  label={t("company_address")}
                  className={classes.textField}
                  fullWidth
                  value={values.adress}
                  onChange={handleChange("adress")}
                  margin='normal'
                />
              </div>
              <div style={{ marginTop: "16px" }}>
                <span className={classes.textField}>
                  <InputLabel id='demo-simple-select-standard-label'>
                    {t("which_package_suits_best")}
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-standard-label'
                    id='demo-simple-select-standard'
                    value={values.packet}
                    className={classes.optionsInput}
                    onChange={handleChange("packet")}
                    label={t("which_package_suits_best")}
                  >
                    <MenuItem value='EXPRESS'>EXPRESS</MenuItem>
                    <MenuItem value='STANDART'>STANDART</MenuItem>
                    <MenuItem value='EXCLUSIVE'>EXCLUSIVE</MenuItem>
                  </Select>
                </span>
              </div>
            </div>
            <div className={clsx(classes.col, classes.secCol)}>
              <div item>
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={values.toExport}
                      onChange={handleChange("toExport")}
                    />
                  }
                  label={t("want_to_export_your_products")}
                />
              </div>
              <div item>
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={values.nowWithHalal}
                      onChange={handleChange("nowWithHalal")}
                    />
                  }
                  label={t("are_currently_working_halal")}
                />
              </div>
              <div item>
                <FormControlLabel
                  className={classes.textField}
                  control={
                    <Checkbox
                      checked={values.freeCer}
                      onChange={handleChange("freeCer")}
                    />
                  }
                  label={t("would_like_certificate_cooperating")}
                />
              </div>
            </div>
          </div>
          <div>
            <TextField
              id='adress'
              label={t("contacts_communication")}
              className={classes.textField}
              fullWidth
              value={values.contacts}
              onChange={handleChange("contacts")}
              margin='normal'
            />
          </div>
          <Grid style={{ textAlign: "center" }}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className={classes.button}
            >
              {t("send")}
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </Grid>
        </form>
      </Paper>
    </div>
  )
}
