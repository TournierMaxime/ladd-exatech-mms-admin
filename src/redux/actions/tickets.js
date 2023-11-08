import { SearchTickets, CreateTicket, GetOneTicket, UpdateTicket, DeleteTicket } from "../../services/tickets"

const searchTickets = (machineId, filters) => async (dispatch) => {
  try {
    const response = await SearchTickets(machineId, filters)
    dispatch({ type: "SEARCH_TICKETS_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "SEARCH_TICKETS_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const createTicket = (data) => async (dispatch) => {
  try {
    const response = await CreateTicket(data)
    dispatch({ type: "CREATE_TICKET_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_TICKET_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const getOneTicket = (ticketId) => async (dispatch) => {
  try {
    const response = await GetOneTicket(ticketId)
    dispatch({ type: "GET_ONE_TICKET_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "GET_ONE_TICKET_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateTicket = (ticketId, data) => async (dispatch) => {
  try {
    const response = await UpdateTicket(ticketId, data)
    dispatch({ type: "UPDATE_TICKET_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_TICKET_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const deleteTicket = (ticketId) => async (dispatch) => {
  try {
    const response = await DeleteTicket(ticketId)
    dispatch({ type: "DELETE_TICKET_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "DELETE_TICKET_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

  const resetTickets = () => ({
  type: "RESET_TICKETS",
});

export { searchTickets, getOneTicket, createTicket, updateTicket, deleteTicket, resetTickets }
