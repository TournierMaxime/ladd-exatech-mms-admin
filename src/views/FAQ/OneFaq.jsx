import { useParams } from "react-router-dom"
import { deleteFAQ, getOneFAQ, updateFAQ } from "../../redux/actions/faq"
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
import {
  ToastUpdateSuccess,
  ToastError,
} from "../../components/Utils/Toast.jsx"
import { useNavigate } from "react-router"
import CreateSectionFaq from "../../views/FAQ/CreateSectionFaq"
import DialogDelete from "../../components/Utils/DialogDelete"
import { FAQSections } from "./FAQSections"
import useCopyToClipboard from "../../hooks/useCopyToClipboard"

const OneFaq = () => {
  const { faqId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const oneFaq = useSelector((state) => state.getOneFAQ.data.faq)
  const isLoading = useSelector((state) => state.getOneFAQ.loading)
  const [data, setData] = useState({})
  const toastSuccess = useRef(null)
  const toastError = useRef(null)
  const [createSectionFaqDialogVisible, setCreateSectionFaqDialogVisible] =
    useState(false)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)
  const { copyToClipboard, toastCopy } = useCopyToClipboard()

  const breadCrumbItems = [
    { label: "FAQ", url: "/" },
    { label: oneFaq?.question, url: "/one-faq/" + faqId },
  ]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  const handleSection = () => {
    setCreateSectionFaqDialogVisible(true)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateFAQ(faqId, data))
      ToastUpdateSuccess(toastSuccess, "FAQ modifié avec succès", false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialogDelete = () => {
    setDialogDeleteVisible(true)
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteFAQ(faqId))
      ToastUpdateSuccess(toastSuccess, "FAQ supprimée avec succès", false)
      setTimeout(() => {
        navigate("/faqs")
      }, 500)
    } catch (error) {
      console.log(error)
    }
  }

  const actionItems = [
    {
      label: "Ajouter section",
      icon: "pi pi-plus text-green-600",
      command: () => {
        handleSection()
      },
    },
    {
      label: "Supprimer",
      icon: "pi pi-trash text-red-600",
      command: () => {
        handleDialogDelete()
      },
    },
  ]

  useEffect(() => {
    dispatch(getOneFAQ(faqId))
  }, [dispatch, faqId])

  return (
    <Fragment>
      <Title title={oneFaq?.question} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Card className="card w-8 m-auto">
          <div className="flex justify-content-between">
            <span className="p-input-icon-left flex align-items-center">
              <h3>{oneFaq?.question}</h3>
            </span>
            <span className="p-input-icon-left">
              <SplitButton
                label="Action"
                className="p-button-outlined p-button-secondary"
                model={actionItems}
              />
              <CreateSectionFaq
                createSectionFaqDialogVisible={createSectionFaqDialogVisible}
                setCreateSectionFaqDialogVisible={
                  setCreateSectionFaqDialogVisible
                }
                faqId={faqId}
                ToastUpdateSuccess={ToastUpdateSuccess}
                ToastError={ToastError}
                toastError={toastError}
                toastSuccess={toastSuccess}
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
                            oneFaq?.faqId,
                            "faqId",
                            "ID",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneFaq?.faqId)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Question"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneFaq?.question,
                            "question",
                            "Question",
                            false
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() => copyToClipboard(oneFaq?.question)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Machine"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneFaq?.Machine?.type,
                            "type",
                            "Machine",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneFaq?.Machine?.type)
                            }
                          />
                        </div>
                      </div>
                      <div className="field">
                        <h5 className="mb-1">{"Catégorie"}</h5>
                        <div className="p-inputgroup">
                          {inputText(
                            data,
                            setData,
                            oneFaq?.FAQCategory?.topic,
                            "topic",
                            "Catégorie",
                            true
                          )}
                          <Button
                            icon="pi pi-copy"
                            type="button"
                            className="p-button-secondary"
                            onClick={() =>
                              copyToClipboard(oneFaq?.FAQCategory?.topic)
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
            <FAQSections oneFaq={oneFaq} />
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
        title={"Suppression FAQ"}
        description={
          "La suppression entrainera la perte définitive de cette FAQ et de toutes données la concernant. Etes vous sur de vouloir continuer ?"
        }
      />
    </Fragment>
  )
}

export default OneFaq
