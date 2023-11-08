import React from 'react'
import { Button } from 'primereact'

export default function HeaderDataTable({ name, handleResetFilters }) {
      const headerDataTable = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-md text-900 font-bold">
        {name}
      </span>
          <span onClick={handleResetFilters}>
        <Button icon="pi pi-refresh" rounded raised />
      </span>
    </div>
  )
  return headerDataTable
}
