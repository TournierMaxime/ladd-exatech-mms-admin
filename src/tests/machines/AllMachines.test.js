import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import AllMachines from "../../views/Machines/AllMachines"
import { searchMachines } from "../../redux/actions/machines"

test("renders AllMachines component", () => {
  const store = configureStore({
    reducer: {
      searchMachines: () => ({ data: [] }),
    },
  })
  render(
    <Provider store={store}>
      <AllMachines />
    </Provider>
  )
  expect(screen.getByText("Toutes les Machines")).toBeInTheDocument()
})

jest.mock("../../redux/actions/machines")

test("calls searchMachines on mount", () => {
  const store = configureStore({
    reducer: {
      searchMachines: () => ({ data: [] }),
    },
  })
  render(
    <Provider store={store}>
      <AllMachines />
    </Provider>
  )
  expect(searchMachines).toHaveBeenCalled()
})

test("displays machines data", () => {
  const mockData = {
    searchMachines: {
      data: {
        machines: [
          {
            machineId: "1",
            type: "Type1",
            code: "Code1",
            state: "ok",
            createdAt: "2023-01-01 00:00:00",
          },
        ],
      },
    },
  }
  const store = configureStore({
    reducer: () => mockData,
  })
  render(
    <Provider store={store}>
      <AllMachines />
    </Provider>
  )
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("Type1")).toBeInTheDocument()
  expect(screen.getByText("Code1")).toBeInTheDocument()
})
