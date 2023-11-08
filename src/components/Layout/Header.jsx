import React, { Fragment } from "react"
import { Menubar } from "primereact"

export default function Header() {
  const start = (
    <a href={"/"}>
      <div className="flex">
        <h1 style={{ fontSize: "1em" }}>LaddExatech MMS Admin</h1>
      </div>
    </a>
  )

  const items = [
    { label: "Machines", url: "/machines" },
    { label: "FAQs", url: "/faqs" },
    { label: "Erreurs", url: "/errors" },
    { label: "APKs", url: "/apks" }
  ]

  return (
    <Fragment>
      <Fragment>
        <Menubar model={items} start={start} />
      </Fragment>
    </Fragment>
  )
}
