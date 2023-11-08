import http from "./axios.js"

const SearchComments = (ticketId, filters) => {
  return http.post(`/comments/${ticketId}/search`, {}, { params: filters })
}

const CreateComment = (data) => {
  return http.post("/comments/new", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const GetOneComment = (commentId) => {
  return http.get(`/comments/${commentId}`)
}

const UpdateComment = (commentId, data) => {
  return http.put(`/comments/${commentId}`, data)
}

const DeleteComment = (commentId, data) => {
  return http.put(`/comments/${commentId}`, data)
}

export { SearchComments, CreateComment, GetOneComment, UpdateComment, DeleteComment }
