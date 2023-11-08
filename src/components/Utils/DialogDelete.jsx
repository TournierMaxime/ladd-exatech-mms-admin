import React, { Fragment } from "react"
import { Button, Dialog } from "primereact"
const DialogDelete = ({
  dialogDeleteVisible,
  setDialogDeleteVisible,
  handleDelete,
  title,
  description,
}) => {
  const dialogDeleteFooterContent = (
    <Fragment>
      <Button
        label="Non"
        icon="pi pi-times"
        onClick={() => setDialogDeleteVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Oui"
        icon="pi pi-check"
        onClick={() => handleDelete()}
        autoFocus
      />
    </Fragment>
  )

  return (
    <Dialog
      header={title}
      visible={dialogDeleteVisible}
      style={{ width: "50vw" }}
      onHide={() => setDialogDeleteVisible(false)}
      footer={dialogDeleteFooterContent}
    >
      <p className="m-0 line-height-4">{description}</p>
    </Dialog>
  )
}

export default DialogDelete
