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
import { searchMachines } from "../../redux/actions/machines.js"
import {
  extraSmallWidth,
  largeWidth,
  mediumWidth,
  smallWidth,
} from "../../components/Utils/DataTable/InputWidthForColumn.js"
import CreateMachine from "./CreateMachine.jsx"
import Pagination from "../../components/Utils/DataTable/Pagination"
import { Filters } from "../../components/Utils/DataTable/Filters.jsx"
import HeaderDataTable from "../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../hooks/usePagination.js"
import useFilters from "../../hooks/useFilters.js"
import BodyDataTable from "../../components/Utils/DataTable/BodyDataTable.jsx"

const AllMachines = () => {
  const dispatch = useDispatch()
  const allMachines = useSelector((state) => state.searchMachines.data)
  const isLoading = useSelector((state) => state.searchMachines.loading)
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
    machineId: undefined,
    errorCode: undefined,
    errorLevel: undefined,
    state: undefined,
  })

  const state = [
    { label: "OK", value: "ok" },
    { label: "KO", value: "ko" },
    { label: "Inconnu", value: "unknown" },
  ]

  const breadCrumbItems = [{ label: "Machines" }]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  useEffect(() => {
    dispatch(searchMachines(filters))
  }, [dispatch, filters])

  return (
    <Fragment>
      <Title title={"Toutes les Machines"} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
        <Button
          label={"Ajouter"}
          onClick={() => setVisible(true)}
          outlined
          size="small"
          className="p-button-sm p-component p-button-raised p-button-success w-6rem h-2rem p-0 mx-1"
        />
        <CreateMachine visible={visible} setVisible={setVisible} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <DataTable
            header={
              <HeaderDataTable
                name={"Liste des machines"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allMachines?.machines}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={["machineId", "type", "code", "state"]}
            filterDisplay="row"
          >
            <Column
              style={smallWidth}
              field="machineId"
              header="ID"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.machineId}
                  isSliceString={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"machineId"}
                  value={filters.machineId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Type"
              body={(rowData) => <BodyDataTable rowData={rowData?.type} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"type"}
                  value={filters.type}
                  placeHolder="Type"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Code"
              body={(rowData) => <BodyDataTable rowData={rowData?.code} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"code"}
                  value={filters.code}
                  placeHolder="Code"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="Etat"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.state} tags="machines" />
              )}
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
                  rowData={rowData?.machineId}
                  url={`/one-machine/${rowData.machineId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allMachines}
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

export default AllMachines
