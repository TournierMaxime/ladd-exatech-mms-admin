import http from "./axios.js"

const SearchTickets = (machineId, filters) => {
  return http.post(`/tickets/${machineId}/search`, {}, { params: filters })
}

const CreateTicket = (data) => {
  return http.post("/tickets/new", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const GetOneTicket = (ticketId) => {
  return http.get(`/tickets/${ticketId}`)
}

const UpdateTicket = (ticketId, data) => {
  return http.put(`/tickets/${ticketId}`, data)
}

const DeleteTicket = (ticketId) => {
  return http.delete(`/tickets/${ticketId}`)
}

export { SearchTickets, CreateTicket, GetOneTicket, UpdateTicket, DeleteTicket }
