import { useTransaction } from "@/hooks/useTransaction"
import { SummaryCard, SummaryCardProps } from "./SummaryCard"



const SummarySection = () => {
    const { transactions, summary } = useTransaction()

    const summaryCardData: SummaryCardProps[] = [
        {
            title: "income",
            amount: summary.income,
        },
        {
            title: "expenses",
            amount: summary.expense,
        },
        {
            title: "balance",
            amount: summary.balance,
        },
        {
            title: "Transactions",
            amount: transactions.length,
            description: "Total transactions"
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryCardData.map((item) => (
                <SummaryCard key={item.title} title={item.title} amount={item.amount} description={item.description} />
            ))}
        </div>
    )
}


export { SummarySection }