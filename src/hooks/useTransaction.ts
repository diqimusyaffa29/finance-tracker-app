import { useMemo } from "react";
import { useFinance } from "./useFinance";
import { Summary, Transaction } from "../types/finance.types";

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


    const summary = useMemo(() => {
        return transactions.reduce<Summary>((acc, t) => {
            if (t.type === 'income') acc.income += t.amount
            else acc.expense += t.amount

            acc.balance = acc.income - acc.expense

            return acc

        }, { income: 0, expense: 0, balance: 0 })
    }, [transactions])


    const addTransaction = (data: Transaction) => {
        dispatch({ type: "ADD_TRANSACTION", payload: data })
    }

    const editTransaction = (data: Transaction) => {
        dispatch({ type: "EDIT_TRANSACTION", payload: data })
    }

    const deleteTransaction = (id: string) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }

    return {
        transactions,
        summary,
        addTransaction,
        editTransaction,
        deleteTransaction
    }
}

export { useTransaction }