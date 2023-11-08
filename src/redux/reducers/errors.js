const initialState = {
  data: [],
  loading: true,
  error: null,
}

const searchErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ERRORS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_ERRORS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEARCH_ERRORS_FAILURE":
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

const getOneErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_ERROR_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_ERROR_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_ERROR_FAILURE":
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

const createErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ERROR_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_ERROR_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_ERROR_FAILURE":
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

const updateErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ERROR_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_ERROR_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_ERROR_FAILURE":
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

const deleteErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_ERROR_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_ERROR_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_ERROR_FAILURE":
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
  searchErrorsReducer,
  getOneErrorReducer,
  createErrorReducer,
  updateErrorReducer,
  deleteErrorReducer
}
