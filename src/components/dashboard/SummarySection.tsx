import { useTransaction } from "@/hooks/useTransaction"
import { SummaryCard, SummaryCardProps } from "./SummaryCard"
import { useFilter } from "@/hooks/useFilter"
import { MONTHS } from "./FilterBar"
import { toTitleCase } from "@/utils/toTitleCase"



const SummarySection = () => {
    const { transactions, summary } = useTransaction()
    const { filter } = useFilter()

    const summaryCardData: SummaryCardProps[] = [
        {
            title: "income",
            amount: summary.income,
            isCurrency: true,
            description: `Total in ${MONTHS[filter.month]} on ${filter.category === "all" ? "All categories" : toTitleCase(filter.category)} category`
        },
        {
            title: "expenses",
            amount: summary.expense,
            isCurrency: true,
            description: `Total in ${MONTHS[filter.month]} on ${filter.category === "all" ? "All categories" : toTitleCase(filter.category)} category`
        },
        {
            title: "balance",
            amount: summary.balance,
            isCurrency: true,
            description: `Total in ${MONTHS[filter.month]} on ${filter.category === "all" ? "All categories" : toTitleCase(filter.category)} category`
        },
        {
            title: "Transactions",
            amount: transactions.length,
            description: `Total in ${MONTHS[filter.month]} on ${filter.category === "all" ? "All categories" : toTitleCase(filter.category)} category`,
            isCurrency: false
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryCardData.map((item) => (
                <SummaryCard isCurrency={item.isCurrency} key={item.title} title={item.title} amount={item.amount} description={item.description} />
            ))}
        </div>
    )
}


export { SummarySection }