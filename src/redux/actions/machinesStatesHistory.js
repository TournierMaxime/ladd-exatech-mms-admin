import { SearchMachinesStatesHistory, GetOneMachineStateHistory, UpdateMachineStateHistory, DeleteMachineStateHistory } from "../../services/machinesStatesHistory"

const searchMachinesStatesHistory =
  (machineId, filters) =>
  async (dispatch) => {
    try {
      dispatch({ type: "SEARCH_MACHINES_STATES_HISTORY_REQUEST" })
      const response = await SearchMachinesStatesHistory(
        machineId,
        filters
      )
      dispatch({
        type: "SEARCH_MACHINES_STATES_HISTORY_SUCCESS",
        payload: response.data
      })
      return response.data
    } catch (error) {
      dispatch({
        type: "SEARCH_MACHINES_STATES_HISTORY_FAILURE",
        payload: error.message
      })
      console.log(error)
      throw error
    }
  }

  const updateMachineStateHistory = (machineStateHistoryId, data) => async (dispatch) => {
  try {
    const response = await UpdateMachineStateHistory(machineStateHistoryId, data)
    dispatch({ type: "UPDATE_MACHINE_STATE_HISTORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_MACHINE_STATE_HISTORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneMachineStateHistory = (machineStateHistoryId) => async (dispatch) => {
  try {
    const response = await GetOneMachineStateHistory(machineStateHistoryId)
    dispatch({ type: "GET_ONE_MACHINE_STATE_HISTORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_MACHINE_STATE_HISTORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteMachineStateHistory = (machineStateHistoryId) => async (dispatch) => {
  try {
    const response = await DeleteMachineStateHistory(machineStateHistoryId)
    dispatch({ type: "DELETE_MACHINE_STATE_HISTORY_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_MACHINE_STATE_HISTORY_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

  const resetMachinesStatesHistory = () => ({
  type: "SEARCH_MACHINES_STATES_HISTORY_RESET",
});

export { searchMachinesStatesHistory, getOneMachineStateHistory, updateMachineStateHistory, deleteMachineStateHistory, resetMachinesStatesHistory }
