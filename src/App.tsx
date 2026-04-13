import { BrowserRouter } from "react-router-dom"
import { FinanceProvider } from "./context/FinanceContext"
import { Sidebar } from "./components/layout/Sidebar"


function App() {

  return (
    <FinanceProvider>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6">
            <h1>KOCAK GAMING </h1>
          </main>
        </div>
      </BrowserRouter>
    </FinanceProvider>
  )
}

export default App
