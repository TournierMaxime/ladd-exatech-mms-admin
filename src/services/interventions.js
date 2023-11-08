import http from "./axios.js"

const SearchInterventions = (ticketId, filters) => {
  return http.post(`/interventions/${ticketId}/search`, {}, { params: filters })
}

const CreateIntervention = (data) => {
  return http.post("/interventions/new", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const GetOneIntervention = (interventionId) => {
  return http.get(`/interventions/${interventionId}`)
}

const UpdateIntervention = (interventionId, data) => {
  return http.put(`/interventions/${interventionId}`, data)
}

const DeleteIntervention = (interventionId) => {
  return http.delete(`/interventions/${interventionId}`)
}

export { SearchInterventions, CreateIntervention, GetOneIntervention, UpdateIntervention, DeleteIntervention }
