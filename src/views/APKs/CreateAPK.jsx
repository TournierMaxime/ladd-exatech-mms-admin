import { Dialog, Button, Toast } from "primereact"
import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { createAPK, searchAPKs } from "../../redux/actions/apks"
import { inputText, inputFile, inputNumber } from "../../components/Utils/Form/Form"
import {
  ToastUpdateSuccess,
  ToastError,
} from "../../components/Utils/Toast.jsx"

const CreateAPK = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    versionCode: null,
    versionName: "",
    file: ""
  })
  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [key, setKey] = useState(1)

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      if (data?.file) {
        const formData = new FormData()
        formData.append("versionCode", data.versionCode)
        formData.append("versionName", data.versionName)
        formData.append("file", data.file)
        await dispatch(createAPK(formData))
      }
      ToastUpdateSuccess(
        toastSuccess,
        "Une APK a été ajoutée avec succès",
        false
      )
      setTimeout(() => {
        setVisible(false)
      }, 500)
      await dispatch(searchAPKs())
    } catch (error) {
      console.log(error)
      ToastError(toastError, error.response.data.errMsg, true)
    }
    setData({
      versionCode: null,
      versionName: "",
      file: "",
    })
  }

  return (
    <Dialog
      header="Ajouter une APK"
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
                <h5 className="mb-1">{"Version code"}</h5>
                <div className="p-inputgroup">
                  {inputNumber(
                    data,
                    setData,
                    data?.versionCode,
                    "versionCode",
                    "Version code"
                  )}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Version name"}</h5>
                <div className="p-inputgroup">
                  {inputText(
                    data,
                    setData,
                    data?.versionName,
                    "versionName",
                    "Version name"
                  )}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Fichier APK"}</h5>
                <div className="p-inputgroup">
                  {inputFile(
                    "basic",
                    "file",
                    data?.file?.name,
                    data?.file?.name,
                    data,
                    setData,
                    selectedFile,
                    setSelectedFile,
                    key,
                      setKey,
                    ".apk"
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

export default CreateAPK
