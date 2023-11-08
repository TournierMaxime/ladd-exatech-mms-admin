import React, { Fragment, useEffect } from "react"
import { DataTable, Column, ProgressSpinner } from "primereact"
import { useDispatch, useSelector } from "react-redux"
import { searchTickets } from "../../../redux/actions/tickets.js"
import {
  extraSmallWidth,
  largeWidth,
  mediumWidth,
  smallWidth,
} from "../../../components/Utils/DataTable/InputWidthForColumn.js"
import { Filters } from "../../../components/Utils/DataTable/Filters.jsx"
import Pagination from "../../../components/Utils/DataTable/Pagination.jsx"
import HeaderDataTable from "../../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../../hooks/usePagination.js"
import useFilters from "../../../hooks/useFilters.js"
import BodyDataTable from "../../../components/Utils/DataTable/BodyDataTable.jsx"

const AllTickets = ({ machineId }) => {
  const dispatch = useDispatch()
  const allTickets = useSelector((state) => state.searchTickets.data)
  const isLoading = useSelector((state) => state.searchTickets.loading)

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
    ticketId: undefined,
    title: undefined,
    provider: undefined,
    status: undefined,
  })

  const status = [
    { label: "Ouvert", value: "open" },
    { label: "En cours", value: "in-progress" },
    { label: "Fermé", value: "closed" },
  ]
  const providers = [
    { label: "MMS", value: "MMS" },
    { label: "Discord", value: "Discord" },
  ]

  useEffect(() => {
    dispatch(searchTickets(machineId, filters))
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
                name={"Liste des tickets"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allTickets?.tickets}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={["ticketId", "title", "provider", "status"]}
            filterDisplay="row"
          >
            <Column
              style={smallWidth}
              header="ID"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.ticketId}
                  isSliceString={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"ticketId"}
                  value={filters.ticketId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Titre"
              body={(rowData) => <BodyDataTable rowData={rowData?.title} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"title"}
                  value={filters.title}
                  placeHolder="Titre"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Provenance"
              body={(rowData) => <BodyDataTable rowData={rowData?.provider} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="select"
                  inputName={"provider"}
                  value={filters.provider}
                  placeHolder="Provenance"
                  options={providers}
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Etat"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.status} tags="tickets" />
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
                  rowData={rowData?.ticketId}
                  url={`/one-ticket/${rowData?.ticketId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allTickets}
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

export default AllTickets
