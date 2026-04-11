import { useMemo } from "react";
import { useFinance } from "./useFinance";

function useTransaction() {
    const { state, dispatch } = useFinance()

    const transactions = useMemo(() => {
        return state.transactions.filter(t => {
            const date = new Date(t.date)
            const matchMonth = date.getMonth() === state.filter.month
            const matchYear = date.getFullYear() === state.filter.year
            const matchCategory = state.filter.category === 'all' || t.category === state.filter.category
            return matchMonth && matchYear && matchCategory
        })
    }, [state.transactions, state.filter])


    return (
        transactions
    )
}

export { useTransaction }