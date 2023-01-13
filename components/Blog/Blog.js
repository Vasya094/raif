import { useState } from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import useStyles from "./blog-style"
import { useTranslation } from "react-i18next"
import CertificateDialog from "./CertificateDialog"
//Perfeo_sertifikat.jpeg
const cards = [1, 2]

function Blog() {
  const { t } = useTranslation("common")
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = (value) => {
    setOpen(false)
  }
  
  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Typography gutterBottom variant='h3' align='center' display='block'>
        {t("certificates_documentation")}
      </Typography>
      <Typography gutterBottom variant='body1' align='center' display='block'>
        {t("company_necessary_documents_certificates")}
      </Typography>
      <div className={classes.blogWrap}>
        <Grid style={{ justifyContent: "space-around" }} container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card onClick={handleClickOpen} className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='./images/Perfeo_sertifikat.jpeg'
                  title='Image title'
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <CertificateDialog
        open={open}
        onClose={handleClose}
        imgWay='./images/Perfeo_sertifikat.jpeg'
      />
    </Container>
  )
}

export default Blog
