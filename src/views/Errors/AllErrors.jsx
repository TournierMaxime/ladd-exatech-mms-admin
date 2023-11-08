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
import { searchErrors } from "../../redux/actions/errors.js"
import {
  extraSmallWidth,
  largeWidth,
  mediumWidth,
  smallWidth,
} from "../../components/Utils/DataTable/InputWidthForColumn.js"
import CreateError from "./CreateError.jsx"
import Pagination from "../../components/Utils/DataTable/Pagination"
import { Filters } from "../../components/Utils/DataTable/Filters.jsx"
import HeaderDataTable from "../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../hooks/usePagination.js"
import useFilters from "../../hooks/useFilters.js"
import BodyDataTable from "../../components/Utils/DataTable/BodyDataTable.jsx"

const AllErrors = () => {
  const dispatch = useDispatch()
  const allErrors = useSelector((state) => state.searchErrors.data)
  const isLoading = useSelector((state) => state.searchErrors.loading)
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
    errorId: undefined,
    errorCode: undefined,
    errorLevel: undefined,
  })

  const errorLevel = [
    { label: "Erreur", value: "error" },
    { label: "Warning", value: "warning" },
    { label: "Critique", value: "critical" },
  ]

  const breadCrumbItems = [{ label: "Erreurs" }]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  useEffect(() => {
    dispatch(searchErrors(filters))
  }, [dispatch, filters])

  return (
    <Fragment>
      <Title title={"Toutes les Erreurs"} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
        <Button
          label={"Ajouter"}
          onClick={() => setVisible(true)}
          outlined
          size="small"
          className="p-button-sm p-component p-button-raised p-button-success w-6rem h-2rem p-0 mx-1"
        />
        <CreateError visible={visible} setVisible={setVisible} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <DataTable
            header={
              <HeaderDataTable
                name={"Liste des erreurs"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allErrors?.errors}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={["errorId", "errorCode", "errorLevel"]}
            filterDisplay="row"
          >
            <Column
              style={smallWidth}
              field="errorId"
              header="ID"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.errorId}
                  isSliceString={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"errorId"}
                  value={filters.errorId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Code erreur"
              body={(rowData) => <BodyDataTable rowData={rowData?.errorCode} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="number"
                  inputName={"errorCode"}
                  value={filters.errorCode}
                  placeHolder="Code erreur"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Niv erreur"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.errorLevel} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"errorLevel"}
                  value={filters.errorLevel}
                  placeHolder="Niv erreur"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                  options={errorLevel}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Message"
              body={(rowData) => <BodyDataTable rowData={rowData?.message} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"message"}
                  value={filters.message}
                  placeHolder="Message"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Description"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.description} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"description"}
                  value={filters.description}
                  placeHolder="Description"
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
                  rowData={rowData?.errorId}
                  url={`/one-error/${rowData.errorId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allErrors}
            pageState={{
              currentPage,
              setCurrentPage,
              itemsPerPage,
              setItemsPerPage,
            }}
            rowsPerPageOptions={[10, 50, 100, 250, 500]}
            onChangeFilters={onChangeFilters}
            filters={{ filtersType, setFiltersType }}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

export default AllErrors
