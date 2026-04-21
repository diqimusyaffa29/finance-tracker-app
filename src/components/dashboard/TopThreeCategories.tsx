import { useExpensesChart } from "@/hooks/useExpensesChart"
import { toTitleCase } from "@/utils/toTitleCase"

const TopThreeCategories = () => {
    const { chartData } = useExpensesChart()

    const topThree = chartData.slice(0, 3)
    const maxAmount = topThree[0]?.amount ?? 1

    return (
        <div className="border rounded-xl p-4 bg-white">
            <h3 className="text-sm font-medium mb-4">Top 3 Categories</h3>

            {topThree.length === 0 ? (
                <div className="h-20 flex item-center justify-center text-sm text-muted-foreground">
                    No Expense Data this month
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {topThree.map((item, index) => {
                        const percentage = Math.round((item.amount / maxAmount) * 100)

                        return (
                            <div key={item.category} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounde-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0">{index + 1}</div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm">{toTitleCase(item.category)}</span>
                                        <span className="text-xs text-muted-foreground">
                                            Rp {item.amount.toLocaleString("id-ID")}
                                        </span>
                                    </div>
                                    <div className="h-1 bg-secondary rounded-full">
                                        <div className="h-1 bg-foreground rounded-full transition-all" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default TopThreeCategories
