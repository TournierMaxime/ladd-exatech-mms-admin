const initialState = {
  data: {
    apks: [],
    items: null,
    results: null,
    page: null,
    totalPages: null
  },
  loading: true,
  error: null,
}

const searchAPKsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_APKS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_APKS_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
          apks: action.payload.apks,
          items: action.payload.items,
          results: action.payload.results,
          page: action.payload.page,
          totalPages: action.payload.totalPages
        },
        loading: false,
      }
    case "SEARCH_APKS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    case "RESET_SEARCH_APKS":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const getOneAPKReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_APK_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_APK_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_APK_FAILURE":
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

const createAPKReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_APK_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_APK_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_APK_FAILURE":
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

const updateAPKReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_APK_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_APK_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_APK_FAILURE":
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

const deleteAPKReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_APK_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_APK_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_APK_FAILURE":
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

export { searchAPKsReducer, createAPKReducer, getOneAPKReducer, updateAPKReducer, deleteAPKReducer }
