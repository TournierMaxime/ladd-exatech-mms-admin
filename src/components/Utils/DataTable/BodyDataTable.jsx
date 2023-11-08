import React, { Fragment } from "react"
import { Button } from 'primereact'
import { Link } from "react-router-dom"
import SliceString from "../SliceString"
import {
  TagsMachinesStates,
  TagsTicketsStates,
  TagsInterventionsStates,
  TagsInterventionModes,
  TagsInterventionsResults,
} from "../Tags"
import moment from "moment"

export default function BodyDataTable({
  rowData,
  isSliceString = false,
  tags = "",
  isDate = false,
  url = "",
}) {
  if (rowData && isSliceString) {
    return <SliceString string={rowData} />
  }

  if (rowData && tags) {
    switch (tags) {
      case "interventionsStates":
        return <TagsInterventionsStates content={rowData} />
      case "interventionsModes":
        return <TagsInterventionModes content={rowData} />
      case "interventionsResults":
        return <TagsInterventionsResults content={rowData} />
      case "tickets":
        return <TagsTicketsStates content={rowData} />
      default:
        return <TagsMachinesStates content={rowData} />
    }
  }
    
    if (rowData && isDate) {
        return moment(rowData).format("DD/MM/YYYY à HH:mm:ss")
    }

    if (rowData && url) {
            return (
      <Fragment>
        <Link to={url}>
          <Button
            icon="pi pi-external-link"
            className={`p-button-sm p-component p-button-raised p-button-info`}
          />
        </Link>
      </Fragment>
    )
    }

  return rowData
}
