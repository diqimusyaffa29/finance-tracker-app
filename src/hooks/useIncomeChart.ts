import type { Category } from "@/types/finance.types"
import { useFinance } from "./useFinance"
import { useMemo } from "react"


const useIncomeChart = () => {
    const { state } = useFinance()

    const chartData = useMemo(() => {
        const incomeByCategory = state.transactions.reduce<Partial<Record<Category, number>>>((acc, t) => {
            if (t.type === "income") {
                const now = new Date(t.date)
                const matchedMonth = now.getMonth() === state.filter.month
                const matchedYear = now.getFullYear() === state.filter.year


                if (matchedMonth && matchedYear) {
                    acc[t.category] = (acc[t.category] ?? 0) + t.amount
                }
            }
            return acc
        }, {})

        return Object.entries(incomeByCategory).map(([category, amount]) => ({
            category: category as Category,
            amount: amount ?? 0
        })).sort((a, b) => b.amount - a.amount)
    }, [state.transactions, state.filter])

    return { chartData }
}

export { useIncomeChart }