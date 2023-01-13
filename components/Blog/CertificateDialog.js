import { Dialog, DialogTitle } from "@material-ui/core"
import * as React from "react"

function CertificateDialog(props) {
  const { onClose, selectedValue, open, imgWay } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <img
        style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}
        src={imgWay}
        alt='image'
      />
    </Dialog>
  )
}

export default CertificateDialog
