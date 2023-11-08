import React, { Fragment, useEffect, useState } from "react"
import Title from "../../components/Utils/Title.jsx"
import {
  DataTable,
  Column,
  Button,
  BreadCrumb,
  ProgressSpinner,
} from "primereact"
import { useDispatch, useSelector } from "react-redux"
import { searchFAQ } from "../../redux/actions/faq.js"
import {
  extraSmallWidth,
  largeWidth,
  mediumWidth,
  smallWidth,
} from "../../components/Utils/DataTable/InputWidthForColumn.js"
import CreateFaq from "./CreateFaq.jsx"
import Pagination from "../../components/Utils/DataTable/Pagination"
import { Filters } from "../../components/Utils/DataTable/Filters.jsx"
import HeaderDataTable from "../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../hooks/usePagination.js"
import useFilters from "../../hooks/useFilters.js"
import BodyDataTable from "../../components/Utils/DataTable/BodyDataTable.jsx"

const AllFAQs = () => {
  const dispatch = useDispatch()
  const allFAQ = useSelector((state) => state.searchFAQ.data)
  const isLoading = useSelector((state) => state.searchFAQ.loading)
  const [visible, setVisible] = useState(false)

  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage } =
    usePagination(1, 10)
  const {
    filters,
    setFilters,
    onChangeFilters,
    handleResetFilters,
    filtersType,
    setFiltersType,
  } = useFilters({
    faqId: undefined,
    question: undefined,
    type: undefined,
    topic: undefined,
  })

  const breadCrumbItems = [{ label: "FAQs" }]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  useEffect(() => {
    dispatch(searchFAQ(filters))
  }, [dispatch, filters])

  return (
    <Fragment>
      <Title title={"Toutes les FAQs"} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
        <Button
          label={"Ajouter"}
          onClick={() => setVisible(true)}
          outlined
          size="small"
          className="p-button-sm p-component p-button-raised p-button-success w-6rem h-2rem p-0 mx-1"
        />
        <CreateFaq visible={visible} setVisible={setVisible} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <DataTable
            header={
              <HeaderDataTable
                name={"Liste des FAQs"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allFAQ?.faq}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={[
              "faqId",
              "question",
              "Machine.type",
              "FAQCategory.topic",
            ]}
            filterDisplay="row"
          >
            <Column
              style={smallWidth}
              field="faqId"
              header="ID"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.faqId} isSliceString={true} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"faqId"}
                  value={filters.faqId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Catégorie"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.FAQCategory?.topic} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"topic"}
                  value={filters.topic}
                  placeHolder="Catégorie"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Question"
              body={(rowData) => <BodyDataTable rowData={rowData?.question} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"question"}
                  value={filters.question}
                  placeHolder="Question"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Machine"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.Machine?.type} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"type"}
                  value={filters.type}
                  placeHolder="Machine"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Création"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.createdAt} isDate={true} />
              )}
            />
            <Column
              style={extraSmallWidth}
              header="Détails"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.faqId}
                  url={`/one-faq/${rowData.faqId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allFAQ}
            pageState={{
              currentPage,
              setCurrentPage,
              itemsPerPage,
              setItemsPerPage,
            }}
            rowsPerPageOptions={[10, 50, 100, 250, 500]}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

export default AllFAQs
