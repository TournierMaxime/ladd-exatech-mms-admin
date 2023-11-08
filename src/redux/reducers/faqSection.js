const initialState = {
  data: [],
  loading: true,
  error: null,
}

const searchFAQSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_FAQ_SECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_FAQ_SECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEARCH_FAQ_SECTION_FAILURE":
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

const getOneFAQSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_FAQ_SECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_FAQ_SECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_FAQ_SECTION_FAILURE":
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

const createFAQSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FAQ_SECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_FAQ_SECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_FAQ_SECTION_FAILURE":
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

const updateFAQSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FAQ_SECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_FAQ_SECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_FAQ_SECTION_FAILURE":
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

const deleteFAQSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FAQ_SECTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_FAQ_SECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_FAQ_SECTION_FAILURE":
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
  searchFAQSectionReducer,
  getOneFAQSectionReducer,
  createFAQSectionReducer,
  updateFAQSectionReducer,
  deleteFAQSectionReducer
}
