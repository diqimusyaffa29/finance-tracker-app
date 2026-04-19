import { useExpensesChart } from "@/hooks/useExpensesChart"
import { toTitleCase } from "@/utils/toTitleCase"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const ExpenseChart = () => {
    const { chartData } = useExpensesChart()

    return (
        <div className="border rounded-2xl shadow-sm p-4 bg-white">
            <h3 className="text-sm font-medium mb-4">Expenses by category</h3>

            {chartData.length === 0 ? (
                <div className="h-40 flex items-center justify-center text-sm text-muted-foreground">
                    No expense data this month
                </div>
            ) : (
                <ResponsiveContainer width={"100%"} height={160}>
                    <BarChart data={chartData} barSize={32}>
                        <XAxis
                            dataKey={"category"}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(val) => toTitleCase(val)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 11 }}
                            tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
                        />
                        <Tooltip
                            formatter={(value) => [
                                `Rp ${Number((value ?? 0).toLocaleString("id-ID"))}`,
                                "Expense"
                            ]}
                            labelFormatter={(label) => toTitleCase(label)}
                            cursor={{ fill: "transparent" }}
                        />
                        <Bar
                            dataKey="amount"
                            radius={[4, 4, 0, 0]}
                            fill="#3f3f46"
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}

export { ExpenseChart }