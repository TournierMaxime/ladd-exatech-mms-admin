import { Dialog, Button, Toast } from "primereact"
import React, { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createFAQ, searchFAQ } from "../../redux/actions/faq"
import { searchMachines } from "../../redux/actions/machines"
import { searchFAQCategory } from "../../redux/actions/faqCategory"
import { dropdown, inputText } from "../../components/Utils/Form/Form"
import { ToastUpdateSuccess, ToastError } from "../../components/Utils/Toast.jsx"

const CreateFaq = ({ visible, setVisible }) => {
  const dispatch = useDispatch()
  const machines = useSelector((state) => state.searchMachines.data.machines)
  const faqCategory = useSelector(
    (state) => state.searchFAQCategory.data.faqCategory
  )
  const [data, setData] = useState({
    question: "",
    machineId: "",
    faqCategoryId: "",
  })
  const toastSuccess = useRef(null)
  const toastError = useRef(null)

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(createFAQ({
        question: data?.question,
        machineId: data?.machineId?.machineId,
        faqCategoryId: data?.faqCategoryId?.faqCategoryId
      }))
      await dispatch(searchFAQ())
      ToastUpdateSuccess(toastSuccess, "FAQ ajouté avec succès", false)
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
    dispatch(searchMachines())
    dispatch(searchFAQCategory())
  }, [dispatch])

  return (
    <Dialog
      header="Ajouter une FAQ"
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
                <h5 className="mb-1">{"Question"}</h5>
                <div className="p-inputgroup">
                  {inputText(
                    data,
                    setData,
                    data?.question,
                    "question",
                    "Question"
                  )}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Machine"}</h5>
                <div className="p-inputgroup">
                  {dropdown(
                    data,
                    setData,
                    data?.machineId,
                    "machineId",
                    machines,
                    "type",
                    "Sélectionnez une machine"
                  )}
                </div>
              </div>
              <div className="field">
                <h5 className="mb-1">{"Catégorie"}</h5>
                <div className="p-inputgroup">
                  {dropdown(
                    data,
                    setData,
                    data?.faqCategoryId,
                    "faqCategoryId",
                    faqCategory,
                    "topic",
                    "Sélectionnez une catégorie"
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

export default CreateFaq
