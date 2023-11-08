import React, { Fragment, useState } from "react"
import { TabView, TabPanel } from "primereact"
import AllInterventions from "./TabsItems/AllInterventions"

export default function TabsMenu({ ticketId }) {
  const data = [
    {
      id: "1",
      tabTitle: "Interventions",
      tabContent: <AllInterventions ticketId={ticketId} />,
    }
  ]

  const Tab = () => {
    const [visibleTab, setVisibleTab] = useState(data[0].id)

    const listTitles = data.map((item, index) =>
      visibleTab === item.id ? (
        <TabView key={index} onTabChange={() => setVisibleTab(item.id)}>
          <TabPanel header={item.tabTitle} />
        </TabView>
      ) : (
        <TabView
          key={index}
          onTabChange={() => setVisibleTab(item.id)}
          activeIndex={visibleTab}
        >
          <TabPanel header={item.tabTitle} />
        </TabView>
      )
    )

    const listContent = data.map((item, index) => (
      <div
        key={index}
        className="tabViewContainer__Content"
        style={visibleTab === item.id ? {} : { display: "none" }}
      >
        {item.tabContent}
      </div>
    ))

    return (
      <Fragment>
        <div className="flex justify-content-between align-items-baseline">
          <div className="tabView">{listTitles}</div>
        </div>
        <div>{listContent}</div>
      </Fragment>
    )
  }
  return Tab()
}
