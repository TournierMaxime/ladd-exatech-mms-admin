/* eslint-disable no-restricted-globals */
import {
  InputText,
  Dropdown,
  FileUpload,
  InputTextarea,
  Editor,
  Button,
  InputNumber
} from "primereact"
import { Fragment } from "react"

const inputText = (data, setData, value, name, placeHolder, readOnly) => {
  return (
    <InputText
      defaultValue={value}
      name={name}
      type="text"
      placeholder={placeHolder}
      onChange={(e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
      }}
      readOnly={readOnly}
    />
  )
}

const inputNumber = (data, setData, value, name, placeHolder) => {
  return (
    <InputNumber
      defaultValue={value}
      name={name}
      type="text"
      min={1}
      placeholder={placeHolder}
      onValueChange={(e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
      }}
    />
  )
}

const editor = (data, setData, value, placeHolder) => {
  const renderHeader = () => {
    return (
      <div className="ql-toolbar">
        {/* Formats de texte */}
        <span className="ql-formats">
          <button className="ql-bold" aria-label="Bold"></button>
          <button className="ql-italic" aria-label="Italic"></button>
          <button className="ql-underline" aria-label="Underline"></button>
        </span>

        {/* En-têtes */}
        <span className="ql-formats">
          <select
            className="ql-header"
            defaultValue={""}
            onChange={(e) => e.persist()}
          >
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="">Body</option>
          </select>
        </span>

        {/* Listes */}
        <span className="ql-formats">
          <button
            className="ql-list"
            value="ordered"
            aria-label="Ordered List"
          ></button>
          <button
            className="ql-list"
            value="bullet"
            aria-label="Bullet List"
          ></button>
        </span>

        {/* Liens et Images */}
        {/* <span className="ql-formats">
          <button className="ql-link" aria-label="Link"></button>
          <button className="ql-image" aria-label="Image"></button>
          <button className="ql-video" aria-label="Video"></button>
        </span> */}

        {/* Alignement */}
        <span className="ql-formats">
          <select
            className="ql-align"
            defaultValue={""}
            onChange={(e) => e.persist()}
          >
            <option value=""></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
      </div>
    )
  }

  const header = renderHeader()
  return (
    <Editor
      value={value}
      headerTemplate={header}
      placeholder={placeHolder}
      className="w-12"
      style={{ height: "320px" }}
      onTextChange={(e) => {
        setData({
          ...data,
          content: e.htmlValue,
        })
      }}
    />
  )
}

const inputTextArea = (data, setData, value, name, autoResize, placeHolder) => {
  return (
    <InputTextarea
      value={value}
      name={name}
      autoResize={autoResize}
      placeholder={placeHolder}
      onChange={(e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
      }}
    />
  )
}

const inputFile = (
  mode,
  name,
  chooseLabel,
  value,
  data,
  setData,
  selectedFile,
  setSelectedFile,
  key,
  setKey,
  accept
) => {

  const removeSelectedFile = () => {
    setSelectedFile(null)
    setData({
      ...data,
      content: "",
      file: "",
    })
    setKey(prevKey => prevKey + 1)
  }

  return (
    <div className="flex flex-row justify-content-between">
      <FileUpload
        key={key}
        id="file"
        mode={mode}
        type="file"
        name={name}
        accept={accept}
        chooseLabel={chooseLabel}
        value={value}
        onSelect={(e) => {
          setData({
            ...data,
            content: e.files[0].name,
            file: e.files[0],
          })
          setSelectedFile(e.files[0])
        }}
      />
      {selectedFile !== null && (
        <div className="flex">
          <Button
            label="Remove File"
            icon="pi pi-times"
            className="p-button-sm p-component p-button-raised p-button-danger w-auto"
            onClick={removeSelectedFile}
          />
        </div>
      )}
    </div>
  )
}

const dropdown = (
  data,
  setData,
  value,
  fieldName,
  options,
  optionLabel,
  placeHolder
) => {
  return (
    <Fragment>
      <Dropdown
        value={value}
        onChange={(e) => {
          setData({
            ...data,
            [fieldName]: e.value,
          })
        }}
        options={options}
        optionLabel={optionLabel}
        placeholder={placeHolder}
        className="w-full md:w-14rem"
      />
    </Fragment>
  )
}

export { inputText, dropdown, inputFile, inputTextArea, editor, inputNumber }
