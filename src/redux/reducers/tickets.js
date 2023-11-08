const initialState = {
  data: {
    tickets: [],
    items: null,
    results: null,
    page: null,
    totalPages: null,
  },
  loading: true,
  error: null,
}

const searchTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_TICKETS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_TICKETS_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
          tickets: action.payload.tickets,
          items: action.payload.items,
          results: action.payload.results,
          page: action.payload.page,
          totalPages: action.payload.totalPages,
        },
        loading: false,
      }
    case "SEARCH_TICKETS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    case "RESET_TICKETS":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const getOneTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_TICKET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_TICKET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_TICKET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

const createTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TICKET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_TICKET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_TICKET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

const updateTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TICKET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_TICKET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_TICKET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

const deleteTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_TICKET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_TICKET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_TICKET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export {
  searchTicketsReducer,
  getOneTicketReducer,
  createTicketReducer,
  updateTicketReducer,
  deleteTicketReducer,
}
