import { Dialog, Button, Toast } from "primereact"
import React, { useState, useRef, useCallback } from "react"
import { useDispatch } from "react-redux"
import { createMachine, searchMachines } from "../../redux/actions/machines"
import { inputText } from "../../components/Utils/Form/Form"
import {
  ToastUpdateSuccess,
  ToastError,
} from "../../components/Utils/Toast.jsx"

const CreateMachine = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    type: "",
    code: "",
  })
  const toastSuccess = useRef(null)
  const toastError = useRef(null)

  const handleCreate = useCallback(async (e) => {
    e.preventDefault();
    try {
      await dispatch(createMachine(data));
      await dispatch(searchMachines());
      ToastUpdateSuccess(toastSuccess, "Machine ajoutée avec succès", false);
      setTimeout(() => setVisible(false), 500);
    } catch (error) {
      console.error(error);
      ToastError(toastError, error.response?.data?.errMsg, true);
    }
    setData({ type: "", code: "" });
  }, [data, dispatch, setVisible]);

  return (
    <Dialog
      header="Ajouter une Machine"
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
                <h5 className="mb-1">{"Type"}</h5>
                <div className="p-inputgroup">
                  {inputText(data, setData, data?.type, "type", "Type")}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Code"}</h5>
                <div className="p-inputgroup">
                  {inputText(data, setData, data?.code, "code", "Code")}
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

export default React.memo(CreateMachine)
