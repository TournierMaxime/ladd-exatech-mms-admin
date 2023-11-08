import http from "./axios.js"

const SearchMachines = (filters) => {
  return http.post("/machines/search", {}, { params: filters })
}

const CreateMachine = (data) => {
  return http.post("/machines/new", data)
}

const GetOneMachine = (machineId) => {
  return http.get(`/machines/${machineId}`)
}

const UpdateMachine = (machineId, data) => {
  return http.put(`/machines/${machineId}`, data)
}

const DeleteMachine = (machineId) => {
  return http.delete(`/machines/${machineId}`)
}

export {
  SearchMachines,
  CreateMachine,
  GetOneMachine,
  UpdateMachine,
  DeleteMachine,
}
