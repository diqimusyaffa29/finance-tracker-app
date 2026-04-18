import { toTitleCase } from "@/utils/toTitleCase"

type SummaryCardProps = {
    title: string
    amount: number
    description?: string
    isCurrency?: boolean
}


const SummaryCard = ({ title, amount, description, isCurrency }: SummaryCardProps) => {
    return (
        <div className="rounded-2xl border bg-white p-5 w-full shadow-sm text-center">
            <p className="text-sm text-muted-foreground">
                {toTitleCase(title)}
            </p>
            {isCurrency ? (
                <h3 className="mt-2 text-2xl font-bold">
                    Rp {amount.toLocaleString("id-ID")}
                </h3>
            ) : (
                <h3 className="mt-2 text-2xl font-bold">
                    {amount.toLocaleString("id-ID")}
                </h3>
            )}

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