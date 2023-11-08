import { Dialog, Button, Toast } from "primereact"
import React, { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { createError, searchErrors } from "../../redux/actions/errors"
import { inputText, dropdown } from "../../components/Utils/Form/Form"
import {
  ToastUpdateSuccess,
  ToastError,
} from "../../components/Utils/Toast.jsx"

const CreateError = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    errorCode: "",
    errorLevel: "",
  })
  const toastSuccess = useRef(null)
  const toastError = useRef(null)

  const errorLevel = [
    { errorLevel: "Erreur", value: "error" },
    { errorLevel: "Warning", value: "warning" },
    { errorLevel: "Critique", value: "critical" },
  ]

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(createError(data))
      await dispatch(searchErrors())
      ToastUpdateSuccess(toastSuccess, "Erreur ajoutée avec succès", false)
      setTimeout(() => {
        setVisible(false)
      }, 500)
    } catch (error) {
      console.log(error)
      ToastError(toastError, error.response.data.errMsg, true)
    }
    setData({})
  }

  useEffect(() => {
    dispatch(searchErrors())
  }, [dispatch])

  return (
    <Dialog
      header="Ajouter une erreur"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
    >
      <form
        onSubmit={handleCreate}
        className="p-fluid flex w-full justify-content-around"
      >
        <div className="flex w-full flex-column">
          <div className="flex w-full flex-column align-items-center md:flex-row md:justify-content-around md:align-items-start">
            <div className="w-10 md:w-6">
              <div className="field">
                <h5 className="mb-1">{"Code erreur"}</h5>
                <div className="p-inputgroup">
                  {inputText(
                    data,
                    setData,
                    data?.errorCode,
                    "errorCode",
                    "Code erreur"
                  )}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Niv erreur"}</h5>
                <div className="p-inputgroup">
                  {dropdown(
                    data,
                    setData,
                    data?.errorLevel,
                    "errorLevel",
                    errorLevel,
                    "errorLevel",
                    "Sélectionnez un type d'erreur"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-content-around mt-4">
            <Button
              label={"Confirmer"}
              className="p-button-sm p-component p-button-raised p-button-success w-auto"
            />
          </div>
        </div>
      </form>
      <Toast ref={toastSuccess} position="top-center" />
      <Toast ref={toastError} position="top-center" />
    </Dialog>
  )
}

export default CreateError
