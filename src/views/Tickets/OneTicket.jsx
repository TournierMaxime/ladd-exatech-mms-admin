import { useParams } from "react-router-dom"
import {
  deleteTicket,
  getOneTicket,
  updateTicket,
} from "../../redux/actions/tickets"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect, useState, useRef } from "react"
import Title from "../../components/Utils/Title.jsx"
import {
  BreadCrumb,
  Card,
  Button,
  Toast,
  SplitButton,
  ProgressSpinner,
} from "primereact"
import { inputText, inputTextArea } from "../../components/Utils/Form/Form"
import { ToastUpdateSuccess } from "../../components/Utils/Toast.jsx"
import { useNavigate } from "react-router"
import DialogDelete from "../../components/Utils/DialogDelete"
import useCopyToClipboard from "../../hooks/useCopyToClipboard"
import TabsMenu from "./TabsMenu"

const OneTicket = () => {
  const { ticketId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const oneTicket = useSelector((state) => state.getOneTicket.data.ticket)
  const isLoading = useSelector((state) => state.getOneTicket.loading)
  const { copyToClipboard, toastCopy } = useCopyToClipboard()

  const [data, setData] = useState({})

  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)

  const breadCrumbItems = [
    { label: "Tickets", url: "/one-machine/" + oneTicket?.Machine?.machineId },
    { label: oneTicket?.title, url: "/one-ticket/" + ticketId },
  ]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateTicket(ticketId, data))
      ToastUpdateSuccess(toastSuccess, "Ticket modifié avec succès", false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialogDelete = () => {
    setDialogDeleteVisible(true)
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteTicket(ticketId))
      ToastUpdateSuccess(toastSuccess, "Ticket supprimée avec succès", false)
      setTimeout(() => {
        navigate("/one-machine/" + oneTicket?.Machine?.machineId)
      }, 500)
    } catch (error) {
      console.log(error)
    }
  }

  const actionItems = [
    {
      label: "Supprimer",
      icon: "pi pi-trash text-red-600",
      command: () => {
        handleDialogDelete()
      },
    },
  ]

  useEffect(() => {
    dispatch(getOneTicket(ticketId))
  }, [dispatch, ticketId])

  return (
    <Fragment>
      <Title title={oneTicket?.title} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
      </div>
      <Card className="card w-8 m-auto">
        <div className="flex justify-content-between">
          <span className="p-input-icon-left flex align-items-center">
            <h3>{oneTicket?.title}</h3>
          </span>
          <span className="p-input-icon-left">
            <SplitButton
              label="Action"
              className="p-button-outlined p-button-secondary"
              model={actionItems}
            />
          </span>
        </div>
        <Fragment>
          {isLoading ? (
            <ProgressSpinner />
          ) : (
            <Card>
              <form
                onSubmit={handleUpdate}
                className="p-fluid flex w-full justify-content-around"
              >
                <div className="flex w-full flex-column">
                  <div className="flex w-full flex-column align-items-center md:flex-row md:justify-content-center md:align-items-start">
                    <div className="w-6">
                      <div className="field">
                        <h5 className="mb-1">{"ID"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.ticketId,
                            "ticketId",
                            "ID",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneTicket?.ticketId)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Titre"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.title,
                            "title",
                            "Titre",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneTicket?.title)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Description"}</h5>
                        <div className="p-inputgroup">
                          {inputTextArea(
                            data,
                            setData,
                            oneTicket?.description,
                            "description",
                            true,
                            "Description"
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneTicket?.description)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Etat"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.status,
                            "status",
                            "Etat",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneTicket?.status)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Machine"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.Machine?.type,
                            "type",
                            "Machine",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneTicket?.Machine?.type)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Code erreur"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.Error?.errorCode,
                            "code",
                            "Code erreur",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneTicket?.Error?.errorCode)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Provenance"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.provider,
                            "provider",
                            "Provenance",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneTicket?.provider)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Lien invitation discord"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneTicket?.discordInviteLink,
                            "discordInvite",
                            "Lien invitation discord",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneTicket?.discordInviteLink)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-content-center mt-4">
                    <Button
                      label={"Mettre à jour"}
                      className="p-button-sm p-component p-button-raised p-button-success w-auto"
                    />
                  </div>
                </div>
              </form>
            </Card>
          )}
          <TabsMenu ticketId={ticketId} />
          <Toast ref={toastSuccess} position="top-center" />
          <Toast ref={toastError} position="top-center" />
          <Toast ref={toastCopy} position="top-center" />
        </Fragment>
      </Card>
      <DialogDelete
        dialogDeleteVisible={dialogDeleteVisible}
        setDialogDeleteVisible={setDialogDeleteVisible}
        handleDelete={handleDelete}
        title="Suppression Ticket"
        description="La suppression entrainera la perte définitive de ce Ticket et de toutes données le concernant. Etes vous sur de vouloir continuer ?"
      />
    </Fragment>
  )
}

export default OneTicket
