const initialState = {
  data: [],
  loading: true,
  error: null,
}

const searchMachinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MACHINES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_MACHINES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEARCH_MACHINES_FAILURE":
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

const getOneMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_MACHINE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_MACHINE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_MACHINE_FAILURE":
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

const createMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MACHINE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_MACHINE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_MACHINE_FAILURE":
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

const updateMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MACHINE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_MACHINE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_MACHINE_FAILURE":
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

const deleteMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MACHINE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_MACHINE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_MACHINE_FAILURE":
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
  searchMachinesReducer,
  getOneMachineReducer,
  createMachineReducer,
  updateMachineReducer,
  deleteMachineReducer
}
