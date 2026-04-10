import { BrowserRouter } from "react-router-dom"
import { FinanceProvider } from "./context/FinanceContext"

function App() {

  return (
    <FinanceProvider>
      <BrowserRouter>
        <div className="">
          <h1 className="text-red-400">Kocak gaming</h1>
        </div>
      </BrowserRouter>
    </FinanceProvider>
  )
}

export default App
