import "./styles/App.scss"
import React, { Fragment } from "react"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import "primereact/resources/themes/fluent-light/theme.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import AllFAQs from "./views/FAQ/AllFAQs"
import Header from "./components/Layout/Header.jsx"
import store from "./redux/store"
import { connect, Provider } from "react-redux"
import OneFaq from "./views/FAQ/OneFaq"
import AllMachines from "./views/Machines/AllMachines"
import OneMachine from "./views/Machines/OneMachine"
import OneTicket from "./views/Tickets/OneTicket"
import OneIntervention from "./views/Interventions/OneIntervention"
import OneMachineHistory from "./views/MachinesHistory/OneMachineHistory"
import AllErrors from "./views/Errors/AllErrors"
import OneError from "./views/Errors/OneError"
import AllAPKs from "./views/APKs/AllAPKs"
//import OneAPK from "./views/APKs/OneAPK"

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AllMachines />} />
          <Route path="/faqs" element={<AllFAQs />} />
          <Route path="/one-faq/:faqId" element={<OneFaq />} />
          <Route path="/machines" element={<AllMachines />} />
          <Route path="/one-machine/:machineId" element={<OneMachine />} />
          <Route path="/one-ticket/:ticketId" element={<OneTicket />} />
          <Route path="/one-intervention/:interventionId" element={<OneIntervention />} />
          <Route path="/one-machine-history/:machineStateHistoryId" element={<OneMachineHistory />} />
          <Route path="/errors" element={<AllErrors />} />
          <Route path="/one-error/:errorId" element={<OneError />} />
          <Route path="/apks" element={<AllAPKs />} />
{/*           <Route path="/one-apk/:apkId" element={<OneAPK />} /> */}
        </Routes>
      </Router>
    </Fragment>
  )
}

const ConnectedApp = connect()(App)

const AppWithRedux = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default AppWithRedux
