import http from "./axios.js"

const SearchFAQSection = (filters) => {
  return http.post("/faq-sections/search", {}, { params: filters })
}

const CreateFAQSection = (data) => {
  return http.post("/faq-sections/new", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const GetOneFAQSection = (sectionId) => {
  return http.get(`/faq-sections/${sectionId}`)
}

const UpdateFAQSection = (sectionId, data) => {
  return http.put(`/faq-sections/${sectionId}`, data)
}

const DeleteFAQSection = (sectionId) => {
  return http.delete(`/faq-sections/${sectionId}`)
}

export {
  SearchFAQSection,
  CreateFAQSection,
  GetOneFAQSection,
  UpdateFAQSection,
  DeleteFAQSection,
}
