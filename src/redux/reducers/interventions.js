const initialState = {
  data: {
    interventions: [],
    items: null,
    results: null,
    page: null,
    totalPages: null,
  },
  loading: true,
  error: null,
}

const searchInterventionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_INTERVENTIONS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_INTERVENTIONS_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
          interventions: action.payload.interventions,
          items: action.payload.items,
          results: action.payload.results,
          page: action.payload.page,
          totalPages: action.payload.totalPages,
        },
        loading: false,
      }
    case "SEARCH_INTERVENTIONS_FAILURE":
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

const getOneInterventionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_INTERVENTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_INTERVENTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_INTERVENTION_FAILURE":
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

const createInterventionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_INTERVENTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_INTERVENTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_INTERVENTION_FAILURE":
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

const updateInterventionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INTERVENTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_INTERVENTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_INTERVENTION_FAILURE":
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

const deleteInterventionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_INTERVENTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_INTERVENTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_INTERVENTION_FAILURE":
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
  searchInterventionsReducer,
  getOneInterventionReducer,
  createInterventionReducer,
  updateInterventionReducer,
  deleteInterventionReducer,
}
