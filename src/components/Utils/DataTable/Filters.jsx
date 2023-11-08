/* eslint-disable default-case */
import { InputText, InputSwitch, InputNumber, Dropdown } from "primereact"
import React from "react"

/**
 * Composant pour afficher un filtre de recherche.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.type - Le type de filtre (text, number, date, boolean).
 * @param {object} props.filtersState - L'état des filtres filters, setFilters.
 * @param {string} props.inputName - Le nom de l'entrée de filtre.
 * @param {string} props.value - La valeur du filtre.
 * @param {string} props.placeHolder - Le texte à afficher comme indicateur de champ vide.
 * @param {boolean} props.disabled - Si le filtre est désactivé.
 * @returns {React.ReactElement} - Le composant d'affichage d'un filtre de recherche.
 */

export const Filters = ({
  type,
  inputName,
  value,
  placeHolder,
  disabled,
  options,
  onChangeFilters,
  filters,
}) => {
  if (type === "boolean") {
    value = filters.filtersType.boolean[inputName]
  }

  if (type === "number") {
    value = filters.filtersType.number[inputName]
  }

  if (type === "select") {
    value = filters.filtersType.dropdown[inputName]
  }

  if (type === "text") {
    value = filters.filtersType.text[inputName] || ""
  }

  const handleChange = (e) => {
    if (type === "text") {
      filters.setFiltersType((prevFiltersType) => ({
        ...prevFiltersType,
        text: {
          ...prevFiltersType.text,
          [inputName]: e.target.value,
        },
      }))
    }
    if (type === "number") {
      filters.setFiltersType((prevFiltersType) => ({
        ...prevFiltersType,
        number: {
          ...prevFiltersType.number,
          [inputName]: e.value,
        },
      }))
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      onChangeFilters(e)
    }
  }

  const handleChangeChecked = (e) => {
    filters.setFiltersType({
      ...filters.filtersType,
      boolean: e.value,
    })
    onChangeFilters(e)
  }

  const handleChangeDropdown = (e) => {
    filters.setFiltersType({
      ...filters.filtersType,
      dropdown: {
        ...filters.filtersType.dropdown,
        [inputName]: e.value,
      },
    })
    onChangeFilters(e, inputName)
  }

  const switchCase = () => {
    switch (type) {
      case "boolean":
        return (
          <InputSwitch
            name={inputName}
            checked={filters.filtersType.boolean}
            trueValue={1}
            falseValue={0}
            onChange={handleChangeChecked}
          />
        )
      case "number":
        return (
          <InputNumber
            name={inputName}
            value={value === "" ? "" : value}
            placeholder={placeHolder}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            disabled={disabled === true ? true : false}
            min={0}
            mode="decimal"
            useGrouping={false}
          />
        )
      case "select":
        return (
          <Dropdown
            value={value}
            options={options}
            onChange={handleChangeDropdown}
            placeholder={placeHolder}
          />
        )
      case "text":
        return (
          <InputText
            name={inputName}
            value={value === "" ? "" : value}
            placeholder={placeHolder}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            disabled={disabled === true ? true : false}
          />
        )
    }
  }

  return switchCase()
}
