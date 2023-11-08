import { SearchFAQSection, CreateFAQSection, GetOneFAQSection, UpdateFAQSection, DeleteFAQSection } from "../../services/faqSections"

const searchFAQSection = (filters) => async (dispatch) => {
  try {
    const response = await SearchFAQSection(filters)
    dispatch({ type: "SEARCH_FAQ_SECTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_FAQ_SECTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createFAQSection = (data) => async (dispatch) => {
  try {
    const response = await CreateFAQSection(data)
    dispatch({ type: "CREATE_FAQ_SECTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_FAQ_SECTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateFAQSection = (sectionId, data) => async (dispatch) => {
  try {
    const response = await UpdateFAQSection(sectionId, data)
    dispatch({ type: "UPDATE_FAQ_SECTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_FAQ_SECTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneFAQSection = (sectionId) => async (dispatch) => {
  try {
    const response = await GetOneFAQSection(sectionId)
    dispatch({ type: "GET_ONE_FAQ_SECTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_FAQ_SECTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteFAQSection = (sectionId) => async (dispatch) => {
  try {
    const response = await DeleteFAQSection(sectionId)
    dispatch({ type: "DELETE_MACHINE_SECTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_MACHINE_SECTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

export { searchFAQSection, createFAQSection, getOneFAQSection, updateFAQSection, deleteFAQSection }
