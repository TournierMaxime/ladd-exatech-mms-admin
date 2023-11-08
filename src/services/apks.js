import http from "./axios.js"

const SearchAPKs = (filters) => {
  return http.post(`/apks/search`, {}, { params: filters })
}

const CreateAPK = (data) => {
  return http.post("/apks/new", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const GetOneAPK = (apkId) => {
  return http.get(`/apks/${apkId}`)
}

const UpdateAPK = (apkId, data) => {
  return http.put(`/apks/${apkId}`, data)
}

const DeleteAPK = (apkId) => {
  return http.delete(`/apks/${apkId}`)
}

export { SearchAPKs, CreateAPK, GetOneAPK, UpdateAPK, DeleteAPK }
