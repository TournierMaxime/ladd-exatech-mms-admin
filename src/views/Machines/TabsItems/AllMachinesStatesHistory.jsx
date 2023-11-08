import React, { Fragment, useEffect } from "react"
import { DataTable, Column, ProgressSpinner } from "primereact"
import { extraSmallWidth } from "../../../components/Utils/DataTable/InputWidthForColumn.js"
import Pagination from "../../../components/Utils/DataTable/Pagination"
import { Filters } from "../../../components/Utils/DataTable/Filters.jsx"
import { useSelector, useDispatch } from "react-redux"
import { searchMachinesStatesHistory } from "../../../redux/actions/machinesStatesHistory"
import HeaderDataTable from "../../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../../hooks/usePagination.js"
import useFilters from "../../../hooks/useFilters.js"
import BodyDataTable from "../../../components/Utils/DataTable/BodyDataTable.jsx"

export default function AllMachinesStatesHistory({ machineId }) {
  const dispatch = useDispatch()
  const machinesStatesHistory = useSelector(
    (state) => state.searchMachinesStatesHistory.data
  )
  const isLoading = useSelector(
    (state) => state.searchMachinesStatesHistory.loading
  )

  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage } =
    usePagination(1, 50)
  const {
    filters,
    setFilters,
    onChangeFilters,
    handleResetFilters,
    filtersType,
    setFiltersType,
  } = useFilters({
    machineStateHistoryId: undefined,
    errorCode: undefined,
    errorLevel: undefined,
    state: undefined,
  })

  const state = [
    { label: "OK", value: "ok" },
    { label: "KO", value: "ko" },
    { label: "Inconnu", value: "unknown" },
  ]

  const errorLevel = [
    { label: "Erreur", value: "error" },
    { label: "Warning", value: "warning" },
    { label: "Critique", value: "critical" },
  ]

  useEffect(() => {
    dispatch(searchMachinesStatesHistory(machineId, filters))
  }, [dispatch, machineId, filters])
  return (
    <Fragment>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <DataTable
            className="mt-4"
            header={
              <HeaderDataTable
                name={"Liste des historiques"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={machinesStatesHistory?.machinesStatesHistory}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={[
              "machineStateHistoryId",
              "state",
              "Error.errorCode",
              "Error.errorLevel",
            ]}
            filterDisplay="row"
          >
            <Column
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.machineStateHistoryId}
                  isSliceString={true}
                />
              )}
              header="ID"
              style={extraSmallWidth}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"machineStateHistoryId"}
                  value={filters.machineStateHistoryId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.state} tags="machines" />
              )}
              header="Etat"
              style={extraSmallWidth}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"state"}
                  value={filters.state}
                  placeHolder="Etat"
                  options={state}
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.Error?.errorCode} />
              )}
              header="Code Erreur"
              style={extraSmallWidth}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="number"
                  inputName={"errorCode"}
                  value={filters.errorCode}
                  placeHolder="Code Erreur"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.Error?.errorLevel} />
              )}
              header="Niv Erreur"
              style={extraSmallWidth}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"errorLevel"}
                  value={filters.errorLevel}
                  placeHolder="Niv Erreur"
                  options={errorLevel}
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.createdAt} isDate={true} />
              )}
              header="Création"
              style={extraSmallWidth}
            />
            <Column
              style={extraSmallWidth}
              header="Détails"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.machineStateHistoryId}
                  url={`/one-machine-history/${rowData?.machineStateHistoryId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={machinesStatesHistory}
            pageState={{
              currentPage,
              setCurrentPage,
              itemsPerPage,
              setItemsPerPage,
            }}
            rowsPerPageOptions={[50, 100, 250, 500]}
          />
        </Fragment>
      )}
    </Fragment>
  )
}
