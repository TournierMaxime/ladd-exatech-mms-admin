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
import { searchAPKs } from "../../redux/actions/apks.js"
import {
  extraSmallWidth,
  largeWidth,
  mediumWidth,
  smallWidth,
} from "../../components/Utils/DataTable/InputWidthForColumn.js"
import CreateAPK from "./CreateAPK.jsx"
import Pagination from "../../components/Utils/DataTable/Pagination"
import { Filters } from "../../components/Utils/DataTable/Filters.jsx"
import HeaderDataTable from "../../components/Utils/DataTable/HeaderDataTable.jsx"
import usePagination from "../../hooks/usePagination.js"
import useFilters from "../../hooks/useFilters.js"
import BodyDataTable from "../../components/Utils/DataTable/BodyDataTable.jsx"

const AllAPKs = () => {
  const dispatch = useDispatch()
  const allAPKs = useSelector((state) => state.searchAPKs.data)
  const isLoading = useSelector((state) => state.searchAPKs.loading)
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
    apkId: undefined,
    versionCode: undefined,
    versionName: undefined
  })

  const breadCrumbItems = [{ label: "APKs" }]
  const breadCrumbHome = { icon: "pi pi-home", url: "/" }

  useEffect(() => {
    dispatch(searchAPKs(filters))
  }, [dispatch, filters])

  return (
    <Fragment>
      <Title title={"Toutes les APKs"} />
      <div className="flex justify-content-between my-2">
        <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
        <Button
          label={"Ajouter"}
          onClick={() => setVisible(true)}
          outlined
          size="small"
          className="p-button-sm p-component p-button-raised p-button-success w-6rem h-2rem p-0 mx-1"
        />
        <CreateAPK visible={visible} setVisible={setVisible} />
      </div>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <Fragment>
          <DataTable
            header={
              <HeaderDataTable
                name={"Liste des APKs"}
                handleResetFilters={handleResetFilters}
              />
            }
            value={allAPKs?.apks}
            size="small"
            selectionMode={true}
            scrollable
            globalFilterFields={["apkId", "versionCode", "versionName"]}
            filterDisplay="row"
          >
            <Column
              style={smallWidth}
              field="apkId"
              header="ID"
              body={(rowData) => (
                <BodyDataTable
                  rowData={rowData?.apkId}
                  isSliceString={true}
                />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"apkId"}
                  value={filters.apkId}
                  placeHolder="ID"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Version code"
              body={(rowData) => <BodyDataTable rowData={rowData?.versionCode} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"versionCode"}
                  value={filters.versionCode}
                  placeHolder="Version code"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={largeWidth}
              header="Version name"
              body={(rowData) => <BodyDataTable rowData={rowData?.versionName} />}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"versionName"}
                  value={filters.versionName}
                  placeHolder="Version name"
                  onChangeFilters={onChangeFilters}
                  filters={{ filtersType, setFiltersType }}
                />
              }
            />
            <Column
              style={mediumWidth}
              header="URL"
              body={(rowData) => (
                <BodyDataTable rowData={rowData?.apkUrl} />
              )}
              filter
              showFilterMenu={false}
              filterElement={
                <Filters
                  type="text"
                  inputName={"apkUrl"}
                  value={filters.apkUrl}
                  placeHolder="URL"
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
                  rowData={rowData?.apkId}
                  url={`/one-apk/${rowData.apkId}`}
                />
              )}
            />
          </DataTable>
          <Pagination
            filtersState={{ filters, setFilters }}
            data={allAPKs}
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

export default AllAPKs
