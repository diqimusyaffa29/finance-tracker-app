import type { Category } from "@/types/finance.types"
import { useFinance } from "./useFinance"
import { useMemo } from "react"

type ChartData = {
    category: Category
    amount: number
}


const useExpensesChart = () => {
    const { state } = useFinance()

    const chartData = useMemo(() => {
        const spentByCategory = state.transactions.reduce<Partial<Record<Category, number>>>((acc, t) => {
            if (t.type === "expense") {
                const now = new Date(t.date)
                const matchedMonth = now.getMonth() === state.filter.month
                const matchedYear = now.getFullYear() === state.filter.year


                if (matchedMonth && matchedYear) {
                    acc[t.category] = (acc[t.category] ?? 0) + t.amount
                }
            }
            return acc
        }, {})

        return Object.entries(spentByCategory).map(([category, amount]) => ({
            category: category as Category,
            amount: amount ?? 0
        })).sort((a, b) => b.amount - a.amount)
    }, [state.transactions, state.filter])

    return { chartData }
}

export { useExpensesChart }