import http from "./axios.js"

const SearchMachinesStatesHistory = (machineId, filters) => {
  return http.post(`/machines-states-history/${machineId}/search`, {}, { params: { ...filters } })
}

const CreateMachineStateHistory = (data) => {
  return http.post("/machines-states-history/new", data)
}

const GetOneMachineStateHistory = (machineStateHistoryId) => {
  return http.get(`/machines-states-history/${machineStateHistoryId}`)
}

const UpdateMachineStateHistory = (machineStateHistoryId, data) => {
  return http.put(`/machines-states-history/${machineStateHistoryId}`, data)
}

const DeleteMachineStateHistory = (machineStateHistoryId, data) => {
  return http.delete(`/machines-states-history/${machineStateHistoryId}`, data)
}

export {
  SearchMachinesStatesHistory,
  CreateMachineStateHistory,
  GetOneMachineStateHistory,
  UpdateMachineStateHistory,
  DeleteMachineStateHistory,
}
