import React, { Fragment, useEffect } from "react"
import { DataTable, Column, ProgressSpinner } from "primereact"
import { useDispatch, useSelector } from "react-redux"
import { searchInterventions } from "../../../redux/actions/interventions.js"
import {
  extraSmallWidth,
  mediumWidth,
  smallWidth,
} from "../../../components/Utils/DataTable/InputWidthForColumn.js"
import { Filters } from "../../../components/Utils/DataTable/Filters.jsx"
import Pagination from "../../../components/Utils/DataTable/Pagination.jsx"
import HeaderDataTable from "../../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../../hooks/usePagination.js"
import useFilters from "../../../hooks/useFilters.js"
import BodyDataTable from "../../../components/Utils/DataTable/BodyDataTable.jsx"

const AllInterventions = ({ ticketId }) => {
  const dispatch = useDispatch()
  const allInterventions = useSelector(
    (state) => state.searchInterventions.data
  )
  const isLoading = useSelector((state) => state.searchInterventions.loading)

  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage } =
    usePagination(1, 10)
  const { filters, setFilters, onChangeFilters, handleResetFilters } =
    useFilters({
      interventionId: undefined,
      title: undefined,
      mode: undefined,
      status: undefined,
      plannedInterventionDate: undefined,
      realInterventionDate: undefined,
    })

  const mode = [
    { label: "Sur place", value: "on spot" },
    { label: "A distance", value: "from distance" },
  ]

  const status = [
    { label: "Nouveau", value: "new" },
    { label: "Validé", value: "validate" },
    { label: "Terminé", value: "ended" },
  ]

  useEffect(() => {
    dispatch(searchInterventions(ticketId, filters))
  }, [dispatch, ticketId, filters])

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
                name={"Liste des interventions"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allInterventions?.interventions}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={[
              "interventionId",
              "Ticket.title",
              "mode",
              "status",
              "plannedInterventionDate",
              "realInterventionDate",
            ]}
            filterDisplay="row"
          >
            <Column
              style={extraSmallWidth}
              header="ID"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.interventionId}
                  isSliceString={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  inputName={"interventionId"}
                  value={filters.interventionId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Titre"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.Ticket?.title} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"title"}
                  value={filters.title}
                  placeHolder="Titre"
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Mode"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.mode}
                  tags="interventionsModes"
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"mode"}
                  value={filters.mode}
                  placeHolder="Mode"
                  options={mode}
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={smallWidth}
              header="Etat"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.status}
                  tags="interventionsStates"
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"status"}
                  value={filters.status}
                  placeHolder="Etat"
                  options={status}
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Rdv planifiée"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.plannedInterventionDate}
                  isDate={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"plannedInterventionDate"}
                  value={filters.plannedInterventionDate}
                  placeHolder="JJ/MM/AAAA"
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Rdv réel"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.realInterventionDate}
                  isDate={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"realInterventionDate"}
                  value={filters.realInterventionDate}
                  placeHolder="JJ/MM/AAAA"
                  onChangeFilters={onChangeFilters}
                />
              }
            />
            <Column
              style={extraSmallWidth}
              header="Détails"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.interventionId}
                  url={`/one-intervention/${rowData?.interventionId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allInterventions}
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

export default AllInterventions
