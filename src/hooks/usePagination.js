import { useState } from "react"

const usePagination = (page = 1, size) => {
    const [currentPage, setCurrentPage] = useState(page)
    const [itemsPerPage, setItemsPerPage] = useState(size)
    
    return { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage }

}

export default usePagination