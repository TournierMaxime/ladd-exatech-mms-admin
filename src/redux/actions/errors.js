import { SearchErrors, CreateError, GetOneError, UpdateError, DeleteError } from "../../services/errors"

const searchErrors = (filters) => async (dispatch) => {
  try {
    const response = await SearchErrors(filters)
    dispatch({ type: "SEARCH_ERRORS_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_ERRORS_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createError = (data) => async (dispatch) => {
  try {
    const response = await CreateError(data)
    dispatch({ type: "CREATE_ERROR_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_ERROR_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateError = (errorId, data) => async (dispatch) => {
  try {
    const response = await UpdateError(errorId, data)
    dispatch({ type: "UPDATE_ERROR_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_ERROR_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneError = (errorId) => async (dispatch) => {
  try {
    const response = await GetOneError(errorId)
    dispatch({ type: "GET_ONE_ERROR_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_ERROR_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteError = (errorId) => async (dispatch) => {
  try {
    const response = await DeleteError(errorId)
    dispatch({ type: "DELETE_ERROR_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_ERROR_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

export { searchErrors, createError, getOneError, updateError, deleteError }
