import React, { Fragment, useState } from "react"
import { TabView, TabPanel } from "primereact"
import AllTickets from "./TabsItems/AllTickets.jsx"
import AllMachinesStatesHistory from "./TabsItems/AllMachinesStatesHistory.jsx"

export default function TabsMenu({ machineId }) {
  const data = [
    {
      id: "1",
      tabTitle: "Historiques",
      tabContent: <AllMachinesStatesHistory machineId={machineId} />,
    },
    {
      id: "2",
      tabTitle: "Tickets",
      tabContent: <AllTickets machineId={machineId} />,
    },
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
