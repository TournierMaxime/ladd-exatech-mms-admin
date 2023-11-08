const initialState = {
  data: [],
  loading: true,
  error: null,
}

const searchFAQCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_FAQ_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_FAQ_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEARCH_FAQ_CATEGORY_FAILURE":
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

const getOneFAQCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_FAQ_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_FAQ_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_FAQ_CATEGORY_FAILURE":
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

const createFAQCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FAQ_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_FAQ_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_FAQ_CATEGORY_FAILURE":
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

const updateFAQCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FAQ_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_FAQ_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_FAQ_CATEGORY_FAILURE":
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

const deleteFAQCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FAQ_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_FAQ_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_FAQ_CATEGORY_FAILURE":
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
  searchFAQCategoryReducer,
  getOneFAQCategoryReducer,
  createFAQCategoryReducer,
  updateFAQCategoryReducer,
  deleteFAQCategoryReducer
}
