import { SearchMachines, GetOneMachine, CreateMachine, UpdateMachine, DeleteMachine } from "../../services/machines"

const searchMachines = (filters) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_MACHINES_REQUEST" })
    const response = await SearchMachines(filters)
    dispatch({ type: "SEARCH_MACHINES_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_MACHINES_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createMachine = (data) => async (dispatch) => {
  try {
    const response = await CreateMachine(data)
    dispatch({ type: "CREATE_MACHINE_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_MACHINE_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateMachine = (machineId, data) => async (dispatch) => {
  try {
    const response = await UpdateMachine(machineId, data)
    dispatch({ type: "UPDATE_MACHINE_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_MACHINE_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneMachine = (machineId) => async (dispatch) => {
  try {
    const response = await GetOneMachine(machineId)
    dispatch({ type: "GET_ONE_MACHINE_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_MACHINE_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteMachine = (machineId) => async (dispatch) => {
  try {
    const response = await DeleteMachine(machineId)
    dispatch({ type: "DELETE_MACHINE_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_MACHINE_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

export { searchMachines, getOneMachine, createMachine, updateMachine, deleteMachine }
