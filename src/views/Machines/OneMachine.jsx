import { useParams } from "react-router-dom"
import {
  deleteMachine,
  getOneMachine,
  updateMachine,
} from "../../redux/actions/machines"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect, useState, useRef, useCallback } from "react"
import Title from "../../components/Utils/Title.jsx"
import { BreadCrumb, Card, Button, Toast, SplitButton, ProgressSpinner } from "primereact"
import { inputText } from "../../components/Utils/Form/Form"
import { ToastUpdateSuccess } from "../../components/Utils/Toast.jsx"
import { useNavigate } from "react-router"
import DialogDelete from "../../components/Utils/DialogDelete"
import useCopyToClipboard from "../../hooks/useCopyToClipboard"
import TabsMenu from "./TabsMenu"

const OneMachine = () => {
  const { machineId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const oneMachine = useSelector((state) => state.getOneMachine.data.machine)
  const isLoading = useSelector((state) => state.getOneMachine.loading)
  const { copyToClipboard, toastCopy } = useCopyToClipboard()

  const [data, setData] = useState({})

  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)

  const breadCrumbItems = [
    { label: "Machines", url: "/machines" },
    { label: oneMachine?.type, url: "/one-machine/" + machineId },
  ]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  const handleUpdate = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await dispatch(updateMachine(machineId, data))
        ToastUpdateSuccess(toastSuccess, "Machine modifiée avec succès", false)
      } catch (error) {
        console.error(error)
      }
    },
    [data, dispatch, machineId, toastSuccess]
  )

  const handleDelete = useCallback(async () => {
    try {
      await dispatch(deleteMachine(machineId))
      ToastUpdateSuccess(toastSuccess, "Machine supprimée avec succès", false)
      setTimeout(() => navigate("/machines"), 500)
    } catch (error) {
      console.error(error)
    }
  }, [dispatch, machineId, navigate, toastSuccess])

  const handleDialogDelete = () => {
    setDialogDeleteVisible(true)
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
    dispatch(getOneMachine(machineId))
  }, [dispatch, machineId])

  return (
    <Fragment>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <Title title={oneMachine?.type} />
          <div className="flex justify-content-between my-2">
            <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
          </div>
          <Card className="card w-8 m-auto">
            <div className="flex justify-content-between">
              <span className="p-input-icon-left flex align-items-center">
                <h3>{oneMachine?.type}</h3>
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
                              oneMachine?.machineId,
                              "machineId",
                              "ID",
                              true
                            )}
                            <Button
                              icon="pi pi-copy"
                              type="button"
                              className="p-button-secondary"
                              onClick={() =>
                                copyToClipboard(oneMachine?.machineId)
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
                              oneMachine?.type,
                              "type",
                              "Type",
                              false
                            )}
                            <Button
                              icon="pi pi-copy"
                              type="button"
                              className="p-button-secondary"
                              onClick={() => copyToClipboard(oneMachine?.type)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <h5 className="mb-1">{"Code"}</h5>
                          <div className="p-inputgroup">
                            {inputText(
                              data,
                              setData,
                              oneMachine?.code,
                              "code",
                              "Code",
                              false
                            )}
                            <Button
                              icon="pi pi-copy"
                              type="button"
                              className="p-button-secondary"
                              onClick={() => copyToClipboard(oneMachine?.code)}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <h5 className="mb-1">{"Etat"}</h5>
                          <div className="p-inputgroup">
                            {inputText(
                              data,
                              setData,
                              oneMachine?.state,
                              "state",
                              "Etat",
                              true
                            )}
                            <Button
                              icon="pi pi-copy"
                              type="button"
                              className="p-button-secondary"
                              onClick={() => copyToClipboard(oneMachine?.state)}
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
              <TabsMenu machineId={machineId} />
              <Toast ref={toastSuccess} position="top-center" />
              <Toast ref={toastError} position="top-center" />
              <Toast ref={toastCopy} position="top-center" />
            </Fragment>
          </Card>
          <DialogDelete
            dialogDeleteVisible={dialogDeleteVisible}
            setDialogDeleteVisible={setDialogDeleteVisible}
            handleDelete={handleDelete}
            title={"Suppression Machine"}
            description={
              "La suppression entrainera la perte définitive de cette machine et de toutes données la concernant. Etes vous sur de vouloir continuer ?"
            }
          />
        </Fragment>
      )}
    </Fragment>
  )
}

export default OneMachine
