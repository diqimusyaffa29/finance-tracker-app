import { createContext, Dispatch, ReactNode, useReducer } from "react"
import type { FinanceAction, FinanceState } from "../types/finance.types"
import { financeReducer, initialState } from "../reducer/financeReducer"
import { dummyBudgets, dummyTransactions } from "@/utils/dummyData"

type FinanceContextType = {
    state: FinanceState
    dispatch: Dispatch<FinanceAction>
}


export const FinanceContext = createContext<FinanceContextType | null>(null)


export function FinanceProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(financeReducer, {
        ...initialState,
        transactions: dummyTransactions,
        budgets: dummyBudgets
    })

    return (
        <FinanceContext.Provider value={{ state, dispatch }}>
            {children}
        </FinanceContext.Provider>
    )
}