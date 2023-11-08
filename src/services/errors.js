import http from "./axios.js"

const SearchErrors = (filters) => {
  return http.post("/errors/search", {}, { params: filters })
}

const CreateError = (data) => {
  return http.post("/errors/new", data)
}

const GetOneError = (errorId) => {
  return http.get(`/errors/${errorId}`)
}

const UpdateError = (errorId, data) => {
  return http.put(`/errors/${errorId}`, data)
}

const DeleteError = (errorId) => {
  return http.delete(`/errors/${errorId}`)
}

export {
  SearchErrors,
  CreateError,
  GetOneError,
  UpdateError,
  DeleteError,
}
