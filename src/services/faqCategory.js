import http from "./axios.js"

const SearchFAQCategory = (filters) => {
  return http.post("/faq-category/search", {}, { params: filters })
}

const CreateFAQCategory = (data) => {
  return http.post("/faq-category/new", data)
}

const GetOneFAQCategory = (faqCategoryId) => {
  return http.get(`/faq-category/${faqCategoryId}`)
}

const UpdateFAQCategory = (faqCategoryId, data) => {
  return http.put(`/faq-category/${faqCategoryId}`, data)
}

const DeleteFAQCategory = (faqCategoryId) => {
  return http.delete(`/faq-category/${faqCategoryId}`)
}

export {
  SearchFAQCategory,
  CreateFAQCategory,
  GetOneFAQCategory,
  UpdateFAQCategory,
  DeleteFAQCategory,
}
