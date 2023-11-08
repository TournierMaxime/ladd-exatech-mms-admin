const initialState = {
  data: [],
  loading: true,
  error: null,
}

const searchFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_FAQ_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_FAQ_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEARCH_FAQ_FAILURE":
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

const getOneFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_FAQ_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_FAQ_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_FAQ_FAILURE":
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

const createFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FAQ_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_FAQ_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_FAQ_FAILURE":
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

const updateFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FAQ_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_FAQ_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_FAQ_FAILURE":
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

const deleteFAQReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FAQ_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_FAQ_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_FAQ_FAILURE":
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
  searchFAQReducer,
  getOneFAQReducer,
  createFAQReducer,
  updateFAQReducer,
  deleteFAQReducer
}
