import { SearchFAQCategory, CreateFAQCategory, GetOneFAQCategory, UpdateFAQCategory, DeleteFAQCategory } from "../../services/faqCategory"

const searchFAQCategory = (filters) => async (dispatch) => {
  try {
    const response = await SearchFAQCategory(filters)
    dispatch({ type: "SEARCH_FAQ_CATEGORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_FAQ_CATEGORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createFAQCategory = (data) => async (dispatch) => {
  try {
    const response = await CreateFAQCategory(data)
    dispatch({ type: "CREATE_FAQ_CATEGORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_FAQ_CATEGORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateFAQCategory = (faqCategoryId, data) => async (dispatch) => {
  try {
    const response = await UpdateFAQCategory(faqCategoryId, data)
    dispatch({ type: "UPDATE_FAQ_CATEGORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_FAQ_CATEGORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneFAQCategory = (faqCategoryId) => async (dispatch) => {
  try {
    const response = await GetOneFAQCategory(faqCategoryId)
    dispatch({ type: "GET_ONE_FAQ_CATEGORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_FAQ_CATEGORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteFAQCategory = (faqCategoryId) => async (dispatch) => {
  try {
    const response = await DeleteFAQCategory(faqCategoryId)
    dispatch({ type: "DELETE_MACHINE_CATEGORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_MACHINE_CATEGORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

export { searchFAQCategory, createFAQCategory, getOneFAQCategory, updateFAQCategory, deleteFAQCategory }
