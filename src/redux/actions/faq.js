import { SearchFAQ, CreateFAQ, GetOneFAQ, UpdateFAQ, DeleteFAQ } from "../../services/faq"

const searchFAQ = (filters) => async (dispatch) => {
  try {
    const response = await SearchFAQ(filters)
    dispatch({ type: "SEARCH_FAQ_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_FAQ_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createFAQ = (data) => async (dispatch) => {
  try {
    const response = await CreateFAQ(data)
    dispatch({ type: "CREATE_FAQ_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_FAQ_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateFAQ = (faqId, data) => async (dispatch) => {
  try {
    const response = await UpdateFAQ(faqId, data)
    dispatch({ type: "UPDATE_FAQ_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_FAQ_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneFAQ = (faqId) => async (dispatch) => {
  try {
    const response = await GetOneFAQ(faqId)
    dispatch({ type: "GET_ONE_FAQ_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_FAQ_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteFAQ = (faqId) => async (dispatch) => {
  try {
    const response = await DeleteFAQ(faqId)
    dispatch({ type: "DELETE_MACHINE_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_MACHINE_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

export { searchFAQ, createFAQ, getOneFAQ, updateFAQ, deleteFAQ }
