const initialState = {
  data: {
    comments: [],
    items: null,
    results: null,
    page: null,
    totalPages: null,
  },
  loading: true,
  error: null,
}

const searchCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_COMMENTS_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
          comments: action.payload.comments,
          items: action.payload.items,
          results: action.payload.results,
          page: action.payload.page,
          totalPages: action.payload.totalPages,
        },
        loading: false,
      }
    case "SEARCH_COMMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    case "RESET_SEARCH_COMMENTS":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const getOneCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_COMMENT_FAILURE":
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

const createCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_COMMENT_FAILURE":
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

const updateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_COMMENT_FAILURE":
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

const deleteCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_COMMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_COMMENT_FAILURE":
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
  searchCommentsReducer,
  createCommentReducer,
  getOneCommentReducer,
  updateCommentReducer,
  deleteCommentReducer,
}
