import React, { Fragment } from "react"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { Dialog, Button } from "primereact"
import {
  inputText,
  dropdown,
  inputFile,
  editor,
} from "../../components/Utils/Form/Form"
import { createFAQSection } from "../../redux/actions/faqSection"
import { getOneFAQ } from "../../redux/actions/faq"
import { youtubeVideoRegex } from "../../components/Utils/Regex"

const CreateSectionFaq = ({
  createSectionFaqDialogVisible,
  setCreateSectionFaqDialogVisible,
  faqId,
  ToastUpdateSuccess,
  ToastError,
  toastSuccess,
  toastError,
}) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    type: "text",
    content: "",
    faqId,
    file: "",
  })
  const [isValid, setIsValid] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [key, setKey] = useState(1)

  const sectionTypes = [
    { type: "Text", value: "text" },
    { type: "Image", value: "image" },
    { type: "Video", value: "video" },
  ]

  const handleCreate = async (e) => {
    e.preventDefault()

    if (data.type === "video" && !isValid) {
      ToastError(toastError, "Veuillez entrer une URL YouTube valide.", true)
      return
    }
    try {
      if (data?.file) {
        const formData = new FormData()
        formData.append("file", data.file)
        formData.append("type", data.type)
        formData.append("content", data.file.name)
        formData.append("faqId", data.faqId)
        await dispatch(createFAQSection(formData))
      }
      ToastUpdateSuccess(
        toastSuccess,
        "Une section FAQ a été ajoutée avec succès",
        false
      )
      setTimeout(() => {
        setCreateSectionFaqDialogVisible(false)
      }, 500)
      await dispatch(getOneFAQ(data.faqId))
    } catch (error) {
      console.log(error)
      ToastError(toastError, error.response.data.errMsg, true)
    }
    setData({
      type: "",
      content: "",
      faqId,
      file: "",
    })
  }

  const sections = (type) => {
    switch (type) {
      case "image":
        return (
          <Fragment>
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
              ".jpg, .jpeg, .png"
            )}
            <div className="flex justify-content-around mt-4">
              <Button
                label={"Confirmer"}
                className="p-button-sm p-component p-button-raised p-button-success w-auto"
                disabled={data.type === "image" && !isValid}
              />
            </div>
          </Fragment>
        )
      case "video":
        return (
          <Fragment>
            <div className="field">
              <h5 className="mb-1">{"URL de la vidéo"}</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">youtube.com/watch?v=</span>
                {inputText(
                  data,
                  setData,
                  data?.content,
                  "content",
                  "ID video",
                  false
                )}
              </div>
            </div>
            <div className="flex justify-content-around mt-4">
              <Button
                label={"Confirmer"}
                className="p-button-sm p-component p-button-raised p-button-success w-auto"
                disabled={data.type === "video" && !isValid}
              />
            </div>
          </Fragment>
        )
      default:
        return (
          <Fragment>
            <div className="field">
              <h5 className="mb-1">{"Contenu"}</h5>
              <div className="p-inputgroup">
                {editor(data, setData, data?.content, "Contenu")}
              </div>
            </div>
            <div className="flex justify-content-around mt-4">
              <Button
                label={"Confirmer"}
                className="p-button-sm p-component p-button-raised p-button-success w-auto"
                disabled={data.type === "text" && !isValid}
              />
            </div>
          </Fragment>
        )
    }
  }

  useEffect(() => {
    if (data.type === "video") {
      const validationResult = youtubeVideoRegex(data?.content)
      const validYouTubeURL = validationResult !== "Invalid YouTube URL"
      setIsValid(validYouTubeURL)
    } else if (data.type === "image" && data.file !== "") {
      setIsValid(true)
    } else if (data.type === "text" && data.content !== null && data.content.trim() !== "") {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [data.content, data.type, data.file])

  return (
    <Dialog
      header="Ajouter une section à une FAQ"
      visible={createSectionFaqDialogVisible}
      style={{ width: "50vw" }}
      onHide={() => setCreateSectionFaqDialogVisible(false)}
    >
      <form
        onSubmit={handleCreate}
        className="p-fluid flex w-full justify-content-around"
      >
        <div className="flex w-full flex-column">
          <div className="flex w-full flex-column align-items-center md:flex-row md:justify-content-around md:align-items-start">
            <div className="w-10">
              <div className="field">
                <h5 className="mb-1">{"Type"}</h5>
                <div className="p-inputgroup">
                  {dropdown(
                    data,
                    setData,
                    data?.type,
                    "type",
                    sectionTypes,
                    "type",
                    "Sélectionnez un type de section"
                  )}
                </div>
              </div>
              {sections(data?.type)}
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  )
}

export default CreateSectionFaq
