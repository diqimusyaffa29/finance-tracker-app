import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FinanceProvider } from "./context/FinanceContext"
import { Sidebar } from "./components/layout/Sidebar"
import { Dashboard } from "./pages/Dashboard"
import { Transactions } from "./pages/Transaction"
import { Budget } from "./pages/Budget"


function App() {

  return (
    <FinanceProvider>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route element={<Dashboard />} path="/" />
              <Route element={<Transactions />} path="/transaction" />
              <Route element={<Budget />} path="/budget" />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </FinanceProvider>
  )
}

export default App
