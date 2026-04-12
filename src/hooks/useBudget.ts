import { useMemo } from "react"
import { useFinance } from "./useFinance"
import { Category } from "../types/finance.types"

function useBudget() {
    const { state, dispatch } = useFinance()

    const spentByCategory = useMemo(() => {
        return state.transactions.reduce<Record<Category, number>>((acc, t) => {
            if (t.type === "expense") {
                const now = new Date(t.date)
                const isThisMonth = now.getMonth() === state.filter.month
                const isThisYear = now.getFullYear() === state.filter.year

                if (isThisMonth && isThisYear) {
                    acc[t.category] = (acc[t.category] ?? 0) + t.amount
                }

            }

            return acc
        }, {} as Record<Category, number>)
    }, [state.transactions, state.filter])

    const budgets = useMemo(() => {
        return state.budgets.map(b => {
            const spent = spentByCategory[b.category] ?? 0
            const remaining = b.limit - spent
            const percentage = (spent / b.limit) * 100
            const isOverBudget = spent > b.limit

            return {
                ...b,
                spent,
                remaining,
                percentage,
                isOverBudget
            }
        })
    }, [state.budgets, spentByCategory])

    return {
        spentByCategory
    }
}


export { useBudget }