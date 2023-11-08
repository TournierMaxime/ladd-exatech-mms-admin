import http from "./axios.js"

const SearchFAQ = (filters) => {
  return http.post("/faq/search", {}, { params: filters })
}

const CreateFAQ = (data) => {
  return http.post("/faq/new", data)
}

const GetOneFAQ = (faqId) => {
  return http.get(`/faq/${faqId}`)
}

const UpdateFAQ = (faqId, data) => {
  return http.put(`/faq/${faqId}`, data)
}

const DeleteFAQ = (faqId) => {
  return http.delete(`/faq/${faqId}`)
}

export {
  SearchFAQ,
  CreateFAQ,
  GetOneFAQ,
  UpdateFAQ,
  DeleteFAQ,
}
