import { toTitleCase } from "@/utils/toTitleCase"

type SummaryCardProps = {
    title: string
    amount: number
    description?: string
}


const SummaryCard = ({ title, amount, description }: SummaryCardProps) => {
    return (
        <div className="rounded-2xl border bg-white p-5 w-full shadow-sm">
            <p className="text-sm text-muted-foreground">
                {toTitleCase(title)}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
                Rp {amount.toLocaleString("id-ID")}
            </h3>

            {description && (
                <p className="mt-1 text-xs text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    )
}

export { SummaryCard }
export type { SummaryCardProps }