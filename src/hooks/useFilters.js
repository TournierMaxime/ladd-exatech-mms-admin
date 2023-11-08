import { useState } from "react"

const useFilters = (initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters)
  const [filtersType, setFiltersType] = useState({
    dropdown: {},
    number: {},
    text: {},
    boolean: {},
    pagination: {},
  })

  const onChangeFilters = (e, inputName) => {
    if (inputName) {
      setFilters({
        ...filters,
        [inputName]: e.value,
      })
    } else {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleResetFilters = () => {
    setFilters(initialFilters)
    setFiltersType({
      dropdown: {},
      number: {},
      text: {},
      boolean: {},
      pagination: {},
    })
  }

  return {
    filters,
    setFilters,
    onChangeFilters,
    handleResetFilters,
    filtersType,
    setFiltersType,
  }
}

export default useFilters
