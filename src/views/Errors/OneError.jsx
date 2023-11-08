import { useParams } from "react-router-dom"
import {
  deleteError,
  getOneError,
  updateError,
} from "../../redux/actions/errors"
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
import { inputText } from "../../components/Utils/Form/Form"
import { ToastUpdateSuccess } from "../../components/Utils/Toast.jsx"
import { useNavigate } from "react-router"
import DialogDelete from "../../components/Utils/DialogDelete"
import useCopyToClipboard from "../../hooks/useCopyToClipboard"

const OneError = () => {
  const { errorId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const oneError = useSelector((state) => state.getOneError.data.error)
  const isLoading = useSelector((state) => state.getOneError.loading)
  const { copyToClipboard, toastCopy } = useCopyToClipboard()

  const [data, setData] = useState({})

  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)

  const breadCrumbItems = [
    { label: "Erreurs", url: `/errors` },
    { label: oneError?.errorId, url: `/one-error/${oneError?.errorId}` },
  ]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateError(errorId, data))
      ToastUpdateSuccess(toastSuccess, "Erreur modifiée avec succès", false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialogDelete = () => {
    setDialogDeleteVisible(true)
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteError(errorId))
      ToastUpdateSuccess(toastSuccess, "Erreur supprimée avec succès", false)
      setTimeout(() => {
        navigate(`/errors`)
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
    dispatch(getOneError(errorId))
  }, [dispatch, errorId])

  return (
    <Fragment>
      <Title title={oneError?.errorId} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Card className="card w-8 m-auto">
          <div className="flex justify-content-between">
            <span className="p-input-icon-left flex align-items-center">
              <h3>{oneError?.errorId}</h3>
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
                            oneError?.errorId,
                            "errorId",
                            "ID",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneError?.errorId)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Code erreur"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneError?.errorCode,
                            "errorCode",
                            "Code erreur",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneError?.errorCode)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Niv erreur"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneError?.errorLevel,
                            "errorLevel",
                            "Niv erreur",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneError?.errorLevel)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Message"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneError?.message,
                            "message",
                            "Message",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneError?.message)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Description"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneError?.description,
                            "Description",
                            "Description",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneError?.description)
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
            <Toast ref={toastSuccess} position="top-center" />
            <Toast ref={toastError} position="top-center" />
            <Toast ref={toastCopy} position="top-center" />
          </Fragment>
        </Card>
      )}
      <DialogDelete
        dialogDeleteVisible={dialogDeleteVisible}
        setDialogDeleteVisible={setDialogDeleteVisible}
        handleDelete={handleDelete}
        title={"Suppression historique machine"}
        description={
          "La suppression entrainera la perte définitive de cet historique et de toutes données le concernant. Etes vous sur de vouloir continuer ?"
        }
      />
    </Fragment>
  )
}

export default OneError
