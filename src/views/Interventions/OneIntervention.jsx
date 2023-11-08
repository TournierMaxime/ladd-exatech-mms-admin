import { useParams } from "react-router-dom"
import {
  deleteIntervention,
  getOneIntervention,
  updateIntervention,
} from "../../redux/actions/interventions"
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

const OneIntervention = () => {
  const { interventionId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const oneIntervention = useSelector(
    (state) => state.getOneIntervention.data.intervention
  )
  const isLoading = useSelector((state) => state.getOneIntervention.loading)
  const { copyToClipboard, toastCopy } = useCopyToClipboard()

  const [data, setData] = useState({})

  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)

  const breadCrumbItems = [
    {
      label: "Ticket",
      url: "/one-ticket/" + oneIntervention?.Ticket?.ticketId,
    },
    {
      label: oneIntervention?.type,
      url: "/one-intervention/" + interventionId,
    },
  ]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateIntervention(interventionId, data))
      ToastUpdateSuccess(
        toastSuccess,
        "Intervention modifiée avec succès",
        false
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialogDelete = () => {
    setDialogDeleteVisible(true)
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteIntervention(interventionId))
      ToastUpdateSuccess(toastSuccess, "Ticket supprimée avec succès", false)
      setTimeout(() => {
        navigate("/one-ticket/" + oneIntervention?.Ticket?.ticketId)
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
    dispatch(getOneIntervention(interventionId))
  }, [dispatch, interventionId])

  return (
    <Fragment>
      <Title title={oneIntervention?.type} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
      </div>
      <Card className="card w-8 m-auto">
        <div className="flex justify-content-between">
          <span className="p-input-icon-left flex align-items-center">
            <h3>{oneIntervention?.type}</h3>
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
                            oneIntervention?.interventionId,
                            "interventionId",
                            "ID",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.interventionId)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Titre"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.type,
                            "type",
                            "Titre",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.type)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Ticket"}</h5>
                        <div className="p-inputgroup">
                          {inputTextArea(
                            data,
                            setData,
                            oneIntervention?.Ticket?.title,
                            "title",
                            true,
                            "Ticket"
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.Ticket?.title)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Mode"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.mode,
                            "mode",
                            "Mode",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.mode)
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
                            oneIntervention?.status,
                            "status",
                            "Etat",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.status)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Type"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.type,
                            "type",
                            "Type",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.type)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Détails du problème"}</h5>
                        <div className="p-inputgroup">
                          {inputTextArea(
                            data,
                            setData,
                            oneIntervention?.details,
                            "details",
                            true,
                            "Détails"
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.details)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Rdv planifié"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.plannedInterventionDate,
                            "plannedInterventionDate",
                            "Rdv planifié",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(
                                oneIntervention?.plannedInterventionDate
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Rdv réel"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.realInterventionDate,
                            "realInterventionDate",
                            "Rdv réel",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(
                                oneIntervention?.realInterventionDate
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Résultat"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.result,
                            "result",
                            "Résultat",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.result)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Commentaire"}</h5>
                        <div className="p-inputgroup">
                          {inputTextArea(
                            data,
                            setData,
                            oneIntervention?.resultComment,
                            "resultComment",
                            true,
                            "Commentaire"
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.resultComment)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Temps d'intervention"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneIntervention?.interventionTime,
                            "interventionTime",
                            "Temps d'intervention",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneIntervention?.interventionTime)
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
          <Toast ref={toastSuccess} position="top-center" />
          <Toast ref={toastError} position="top-center" />
          <Toast ref={toastCopy} position="top-center" />
        </Fragment>
      </Card>
      <DialogDelete
        dialogDeleteVisible={dialogDeleteVisible}
        setDialogDeleteVisible={setDialogDeleteVisible}
        handleDelete={handleDelete}
        title="Suppression Intervention"
        description="La suppression entrainera la perte définitive de cette intervention et de toutes données la concernant. Etes vous sur de vouloir continuer ?"
      />
    </Fragment>
  )
}

export default OneIntervention
